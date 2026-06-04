"use client";

import { useState, useRef } from "react";

export default function SoalImages({ folder, pages }) {
  const [scale, setScale] = useState(1);
  const lastDistance = useRef(null);

  // ===== PC zoom (CTRL + scroll) =====
  const handleWheel = (e) => {
    if (e.ctrlKey) {
      e.preventDefault();

      setScale((prev) => {
        let next = prev + (e.deltaY < 0 ? 0.1 : -0.1);
        return Math.min(Math.max(next, 1), 3);
      });
    }
  };

  // ===== HP pinch zoom =====
  const getDistance = (touches) => {
    const dx = touches[0].clientX - touches[1].clientX;
    const dy = touches[0].clientY - touches[1].clientY;
    return Math.sqrt(dx * dx + dy * dy);
  };

  const handleTouchMove = (e) => {
    if (e.touches.length === 2) {
      e.preventDefault();

      const distance = getDistance(e.touches);

      if (lastDistance.current) {
        const diff = distance - lastDistance.current;

        setScale((prev) => {
          let next = prev + diff * 0.005;
          return Math.min(Math.max(next, 1), 3);
        });
      }

      lastDistance.current = distance;
    }
  };

  const handleTouchEnd = () => {
    lastDistance.current = null;
  };

  return (
    <div
      className="w-full overflow-auto"
      onWheel={handleWheel}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
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