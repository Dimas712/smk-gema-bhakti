"use client";

import {
  TransformWrapper,
  TransformComponent,
} from "react-zoom-pan-pinch";

export default function SoalImages({
  folder,
  pages,
}) {
  return (
    <TransformWrapper
      initialScale={1}
      minScale={1}
      maxScale={5}
      wheel={{ disabled: false }}
      pinch={{ disabled: false }}
      doubleClick={{ disabled: false }}
    >
      <TransformComponent>
        <div>
          {Array.from(
            { length: pages },
            (_, i) => (
              <img
                key={i}
                src={`/soal/${folder}/${i + 1}.webp`}
                alt={`Halaman ${i + 1}`}
                loading="lazy"
                draggable={false}
                className="w-full mb-4 select-none"
              />
            )
          )}
        </div>
      </TransformComponent>
    </TransformWrapper>
  );
}