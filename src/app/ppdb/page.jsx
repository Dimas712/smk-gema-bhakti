"use client"

export default function PPDBPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white rounded-3xl shadow-lg p-10 max-w-xl text-center">

        <h1 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">
          PPDB SMK Gema Bhakti 1 Jasinga
        </h1>

        <p className="text-gray-600 text-lg mb-6">
          Halaman PPDB sedang dalam proses pengembangan.
        </p>

        <div className="bg-yellow-100 text-yellow-800 rounded-xl px-6 py-4 mb-6">
          <p className="font-semibold">
            🚧 Maintenance
          </p>
          <p className="text-sm mt-1">
            Silakan kembali lagi dalam waktu dekat untuk informasi
            Penerimaan Peserta Didik Baru.
          </p>
        </div>

        <a
          href="https://wa.me/62XXXXXXXXXX"
          target="_blank"
          className="inline-block bg-green-700 text-white px-6 py-3 rounded-full
                     font-semibold hover:bg-green-800 transition"
        >
          Hubungi Sekolah
        </a>

      </div>
    </main>
  )
}
