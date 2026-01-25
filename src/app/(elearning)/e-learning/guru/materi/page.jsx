import TabelMateriGuru from "@/component/guru/TabelMateriGuru";

export default function MateriGuruPage() {
  return (
    <>
      {/* HEADER */}
      <div className="bg-white rounded-2xl shadow p-6 mt-8">
        <h2 className="text-xl font-semibold text-gray-800">
          Materi Pembelajaran
        </h2>
        <p className="text-sm text-gray-600 mt-1">
          Kelola materi pembelajaran untuk kelas yang Anda ampu.
        </p>
      </div>

      {/* TABLE */}
      <TabelMateriGuru />
    </>
  );
}
