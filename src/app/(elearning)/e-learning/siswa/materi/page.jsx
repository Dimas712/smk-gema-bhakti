"use client";
import { useRouter } from "next/navigation";
import MapelCard from "@/component/siswa/MapelCard";

export default function MateriPage() {
  const router = useRouter();

  return (
    <>
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mt-16">
        Dashboard <span className="mx-2">›</span>
        <span className="text-gray-700 font-medium">Materi</span>
      </div>

      {/* Title */}
      <h1 className="text-xl font-bold text-gray-700 mb-6">
        Mata Pelajaran
      </h1>

      {/* Mapel Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <MapelCard
          title="Bahasa Indonesia"
          total={4}
          onClick={() => router.push("materi/bahasa-indonesia")}
        />
        <MapelCard
          title="Bahasa Inggris"
          total={5}
          onClick={() => router.push("materi/bahasa-inggris")}
        />
        <MapelCard
          title="Ekonomi Bisnis"
          total={6}
          onClick={() => router.push("materi/bahasa-sunda")}
        />
        <MapelCard
          title="KPPI"
          total={7}
          onClick={() => router.push("materi/kppi")}
        />
        <MapelCard
          title="Seni Budaya"
          total={8}
          onClick={() => router.push("materi/seni-budaya")}
        />
        <MapelCard
          title="Pendidikan Agama Islam"
          total={9}
          onClick={() => router.push("materi/pai")}
        />
      </div>
    </>
  );
}
