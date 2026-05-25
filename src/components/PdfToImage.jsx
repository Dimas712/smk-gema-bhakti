"use client";

import { useEffect, useState } from "react";

export default function PdfToImage({ file }) {

  const [images, setImages] = useState([]);

  useEffect(() => {

    let mounted = true;

    const convertPdf = async () => {

      try {

        // import hanya di browser
        const pdfjsLib = await import("pdfjs-dist");

        pdfjsLib.GlobalWorkerOptions.workerSrc =
          new URL(
            "pdfjs-dist/build/pdf.worker.min.mjs",
            import.meta.url
          ).toString();

        const pdf =
          await pdfjsLib
            .getDocument(file)
            .promise;

        const hasil = [];

        for (
          let pageNum = 1;
          pageNum <= pdf.numPages;
          pageNum++
        ) {

          const page =
            await pdf.getPage(pageNum);

          const viewport =
            page.getViewport({
              scale: 2
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

          hasil.push(
            canvas.toDataURL("image/png")
          );

        }

        if (mounted) {
          setImages(hasil);
        }

      } catch (err) {
        console.log("PDF Error:", err);
      }

    };

    convertPdf();

    return () => {
      mounted = false;
    };

  }, [file]);

  return (

    <div
      className="overflow-y-auto h-full"
      onContextMenu={(e)=>e.preventDefault()}
    >

      {images.map((img,index)=>(

        <div
          key={index}
          className="relative mb-5"
        >

          {/* watermark */}

          <div className="
          absolute inset-0
          flex items-center justify-center
          text-6xl font-bold
          text-black/10
          rotate-[-30deg]
          pointer-events-none
          select-none
          ">

            SMK GEMA BHAKTI 1 JASINGA
          </div>

          <img
            src={img}
            alt={`halaman-${index}`}
            draggable={false}
            className="
            w-full
            select-none
            pointer-events-none
            "
          />

        </div>

      ))}

    </div>

  );

}