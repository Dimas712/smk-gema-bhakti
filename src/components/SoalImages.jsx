"use client";

export default function SoalImages({
  folder,
  pages,
}) {
  return (
    <div
      className="overflow-y-auto h-full"
      onContextMenu={(e) =>
        e.preventDefault()
      }
    >
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
  );
}