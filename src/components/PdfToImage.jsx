"use client";

import { useEffect, useState, useRef } from "react";

export default function PdfToImage({ file }) {

  const [pdfDoc, setPdfDoc] = useState(null);
  const [images, setImages] = useState([]);
  const [visiblePages, setVisiblePages] = useState(3);

  const loadingRef = useRef(false);

  // load PDF
  useEffect(() => {

    let mounted = true;

    const loadPdf = async () => {

      try {

        setImages([]);
        setVisiblePages(3);

        const pdfjsLib =
          await import("pdfjs-dist");

        pdfjsLib.GlobalWorkerOptions.workerSrc =
          new URL(
            "pdfjs-dist/build/pdf.worker.min.mjs",
            import.meta.url
          ).toString();

        const pdf =
          await pdfjsLib
            .getDocument(file)
            .promise;

        if (mounted) {
          setPdfDoc(pdf);
        }

      } catch (err) {
        console.log(err);
      }

    };

    loadPdf();

    return () => {
      mounted = false;
    };

  }, [file]);

  // render halaman yang diperlukan
  useEffect(() => {

    if (!pdfDoc) return;

    const renderPages = async () => {

      if (loadingRef.current) return;

      loadingRef.current = true;

      const start = images.length + 1;

      const end = Math.min(
        visiblePages,
        pdfDoc.numPages
      );

      const hasilBaru = [];

      for (
        let pageNum = start;
        pageNum <= end;
        pageNum++
      ) {

        const page =
          await pdfDoc.getPage(pageNum);

        const viewport =
          page.getViewport({
            scale: 1.5
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

        hasilBaru.push(
          canvas.toDataURL("image/webp", 0.8)
        );

      }

      setImages(prev => [
        ...prev,
        ...hasilBaru
      ]);

      loadingRef.current = false;

    };

    renderPages();

  }, [pdfDoc, visiblePages]);

  // scroll lazy load
  const handleScroll = (e) => {

    const el = e.target;

    const nearBottom =
      el.scrollTop + el.clientHeight >=
      el.scrollHeight - 300;

    if (
      nearBottom &&
      pdfDoc &&
      visiblePages < pdfDoc.numPages
    ) {

      setVisiblePages(prev =>
        Math.min(
          prev + 3,
          pdfDoc.numPages
        )
      );

    }

  };

  return (

    <div
      className="overflow-y-auto h-full"
      onScroll={handleScroll}
      onContextMenu={(e)=>e.preventDefault()}
    >

      {images.map((img,index)=>(

        <div
          key={index}
          className="relative mb-5"
        >

          <div
            className="
            absolute inset-0
            flex items-center justify-center
            text-6xl font-bold
            text-black/10
            rotate-[-30deg]
            pointer-events-none
            select-none
          "
          >
            SMK GEMA BHAKTI 1 JASINGA
          </div>

          <img
            src={img}
            alt={`halaman-${index+1}`}
            draggable={false}
            loading="lazy"
            className="
            w-full
            select-none
            pointer-events-none
            "
          />

        </div>

      ))}

      {pdfDoc &&
        images.length <
          pdfDoc.numPages && (

        <div className="text-center py-5">
          Memuat halaman berikutnya...
        </div>

      )}

    </div>

  );

}