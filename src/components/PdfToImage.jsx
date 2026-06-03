"use client";

import { useEffect, useState } from "react";

export default function PdfToImage({ file }) {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const loadPdf = async () => {
      try {
        setImages([]);
        setLoading(true);

        const pdfjsLib = await import("pdfjs-dist");

        pdfjsLib.GlobalWorkerOptions.workerSrc =
          new URL(
            "pdfjs-dist/build/pdf.worker.min.mjs",
            import.meta.url
          ).toString();

        const pdf = await pdfjsLib
          .getDocument(file)
          .promise;

        const BATCH_SIZE = 1;

        for (
          let startPage = 1;
          startPage <= pdf.numPages;
          startPage += BATCH_SIZE
        ) {
          const batchImages = [];

          const endPage = Math.min(
            startPage + BATCH_SIZE - 1,
            pdf.numPages
          );

          for (
            let pageNum = startPage;
            pageNum <= endPage;
            pageNum++
          ) {
            const page =
              await pdf.getPage(pageNum);

            const scale =
              window.innerWidth < 768
                ? 0.8
                : 1.2;

            const viewport =
              page.getViewport({
                scale
              });

            const canvas =
              document.createElement("canvas");

            const context =
              canvas.getContext("2d");

            canvas.width =
              viewport.width;

            canvas.height =
              viewport.height;

            await page.render({
              canvasContext: context,
              viewport
            }).promise;

            const blob = await new Promise((resolve) =>
              canvas.toBlob(
                resolve,
                "image/webp",
                0.7
              )
            );

            batchImages.push(
              URL.createObjectURL(blob)
            );
          }

          if (mounted) {
            setImages((prev) => [
              ...prev,
              ...batchImages
            ]);
          }

          // beri jeda kecil agar UI tetap responsif
          await new Promise((resolve) =>
            setTimeout(resolve, 50)
          );
        }

        if (mounted) {
          setLoading(false);
        }

      } catch (err) {
        console.error("PDF Error:", err);

        if (mounted) {
          setLoading(false);
        }
      }
    };

    loadPdf();

    return () => {
      mounted = false;
    };
  }, [file]);

  return (
    <div
      className="overflow-y-auto h-full"
      onContextMenu={(e) =>
        e.preventDefault()
      }
    >
      {images.map((img, index) => (
        <div
          key={index}
          className="relative mb-5"
        >

          <img
            src={img}
            alt={`halaman-${index + 1}`}
            draggable={false}
            loading="lazy"
            className="
            w-full
            select-none
            touch-manipulation
            "
          />
        </div>
      ))}

      {loading && (
        <div className="text-center py-6">
          <div className="animate-pulse text-green-600 font-semibold">
            Memuat soal...
          </div>
        </div>
      )}
    </div>
  );
}