"use client";

import { useState } from "react";
import { ZoomIn, ZoomOut } from "lucide-react";

export default function SoalImages({ folder, pages }) {
  const [scale, setScale] = useState(1);

  return (
    <div className="relative">

      {/* Tombol Zoom */}

      <div className="
      fixed bottom-5 right-5
      z-[999]
      flex flex-col gap-2
      ">

        <button
          onClick={() =>
            setScale((prev) => Math.min(prev + 0.1, 3))
          }
          className="
          w-12 h-12
          rounded-full
          bg-green-600
          text-white
          shadow-lg
          flex items-center justify-center
          "
        >
          <ZoomIn size={20} />
        </button>

        <button
          onClick={() =>
            setScale((prev) => Math.max(prev - 0.1, 0.5))
          }
          className="
          w-12 h-12
          rounded-full
          bg-white
          border
          shadow-lg
          flex items-center justify-center
          "
        >
          <ZoomOut size={20} />
        </button>

      </div>

      {/* Soal */}

      <div className="
      flex justify-center
      px-2 md:px-6
      py-6
      ">

        <div
          style={{
            transform: `scale(${scale})`,
            transformOrigin: "top center",
            transition: "transform 0.2s ease"
          }}
          className="w-full max-w-4xl"
        >

          {Array.from({ length: pages }, (_, i) => (
            <div
              key={i}
              className="
              bg-white
              rounded-2xl
              shadow-lg
              overflow-hidden
              mb-6
              "
            >
              <img
                src={`/soal/${folder}/${i + 1}.webp`}
                alt={`Halaman ${i + 1}`}
                loading="lazy"
                draggable={false}
                className="
                w-full
                select-none
                pointer-events-none
                "
              />

              <div className="
              px-4 py-2
              bg-gray-50
              border-t
              text-center
              text-sm
              text-gray-500
              ">
                Halaman {i + 1} dari {pages}
              </div>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}