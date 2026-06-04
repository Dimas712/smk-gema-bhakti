"use client";

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

export default function SoalImages({ folder, pages }) {
  return (
    <div className="w-full overflow-auto">
      <TransformWrapper
        initialScale={1}
        minScale={1}
        maxScale={4}
        panning={{ disabled: false }}
        wheel={{
          step: 0.1,
          smoothStep: 0.01,
          activationKeys: [], // 🔥 ini kunci penting
        }}
        doubleClick={{ disabled: false }}
      >
        <TransformComponent>
          <div className="w-full">
            {Array.from({ length: pages }, (_, i) => (
              <img
                key={i}
                src={`/soal/${folder}/${i + 1}.webp`}
                alt={`Halaman ${i + 1}`}
                loading="lazy"
                draggable={false}
                className="w-full mb-4 select-none"
              />
            ))}
          </div>
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
}