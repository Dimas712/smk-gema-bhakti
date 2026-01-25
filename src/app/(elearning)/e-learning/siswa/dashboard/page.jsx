import MapelCard from "@/component/siswa/MapelCard";
import TabelMateri from "@/component/siswa/TabelMateri";

export default function DashboardSiswaPage() {
  return (
    <>
      {/* Absensi */}
      <div className="bg-white rounded-2xl shadow p-6 text-center text-gray-700 mt-20">
        <h2 className="text-lg font-semibold mb-4">Absensi</h2>

        <div className="max-w-xs mx-auto space-y-4">
          <select className="w-full border rounded-xl px-4 py-3">
            <option>X.2</option>
            <option>X.3</option>
            <option>XI RPL</option>
          </select>

          <button className="w-full bg-green-500 text-white py-3 rounded-xl font-semibold hover:bg-green-600 transition">
            Lanjutkan Absensi
          </button>
        </div>
      </div>

      {/* Welcome */}
      <div className="bg-white rounded-2xl shadow p-6 text-center text-gray-700">
        <h2 className="text-xl font-semibold mb-2">
          Selamat Datang!
        </h2>
        <p className="text-gray-600 text-sm">
          Mari mulai belajar! Pilih mata pelajaran untuk memulai.
        </p>
      </div>

      {/* Mata Pelajaran */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-700">
        <MapelCard title="Bahasa Indonesia" total={4} />
        <MapelCard title="Bahasa Inggris" total={5} />
        <MapelCard title="Ekonomi Bisnis" total={6} />
        <MapelCard title="KKPI" total={7} />
        <MapelCard title="Seni Budaya" total={8} />
        <MapelCard title="Pendidikan Agama Islam" total={9} />
      </div>

      {/* Tabel Materi */}
      <TabelMateri />
    </>
  );
}
