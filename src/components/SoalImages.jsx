"use client";

import { useState } from "react";

export default function SoalImages({ folder, pages }) {
  const [scale, setScale] = useState(1);

  const handleWheel = (e) => {
    if (e.ctrlKey) {
      e.preventDefault();

      setScale((prev) => {
        let next = prev + (e.deltaY < 0 ? 0.1 : -0.1);
        return Math.min(Math.max(next, 1), 3);
      });
    }
  };

  return (
    <div className="w-full overflow-auto" onWheel={handleWheel}>
      <div
        className="w-full origin-top transition-transform"
        style={{
          transform: `scale(${scale})`,
        }}
      >
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
    </div>
  );
}