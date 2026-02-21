"use client";

import Image from "next/image";

export default function PPDBPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-yellow-100 via-white to-green-100 px-4 py-14">
      <div className="max-w-7xl mx-auto">

        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
            PPDB Online
            <span className="block text-green-700">
              SMK Gema Bhakti 1 Jasinga
            </span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Penerimaan Peserta Didik Baru tahun ajaran terbaru.
            Daftar sekarang dan jadilah bagian dari sekolah kejuruan
            unggulan yang siap mencetak lulusan berkarakter dan siap kerja.
          </p>
        </section>

        {/* Role Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">

          {/* Daftar */}
          <div className="group bg-white/70 backdrop-blur-lg rounded-3xl p-8 shadow-lg hover:shadow-2xl transition">
            <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-green-600 text-white text-3xl mb-6">
              📝
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-gray-700">
              Pendaftaran
            </h3>
            <p className="text-gray-600 text-sm mb-6">
              Lakukan pendaftaran peserta didik baru secara online
              dengan mudah, cepat, dan aman.
            </p>
            <a
              href="/ppdb/auth/daftar"
              className="inline-flex items-center gap-2 font-semibold text-green-700 hover:text-green-800 transition"
            >
              Daftar Sekarang →
            </a>
          </div>

          {/* Login */}
          <div className="group bg-white/70 backdrop-blur-lg rounded-3xl p-8 shadow-lg hover:shadow-2xl transition">
            <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-blue-600 text-white text-3xl mb-6">
              🔐
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-gray-700">
              Login Peserta
            </h3>
            <p className="text-gray-600 text-sm mb-6">
              Masuk untuk melengkapi biodata, upload berkas, dan
              memantau status pendaftaran.
            </p>
            <a
              href="/ppdb/auth/login/pendaftar"
              className="inline-flex items-center gap-2 font-semibold text-blue-700 hover:text-blue-800 transition"
            >
              Login PPDB →
            </a>
          </div>

        {/* Login Admin */}
        <div className="group bg-white/70 backdrop-blur-lg rounded-3xl p-8 shadow-lg hover:shadow-2xl transition">
          <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-purple-600 text-white text-3xl mb-6">
            🛠️
          </div>
          <h3 className="text-2xl font-semibold mb-2 text-gray-700">
            Login Admin
          </h3>
          <p className="text-gray-600 text-sm mb-6">
            Masuk sebagai admin untuk mengelola data pendaftar,
            memverifikasi berkas, dan melihat hasil seleksi.
          </p>
          <a
            href="/ppdb/auth/login/admin"
            className="inline-flex items-center gap-2 font-semibold text-purple-700 hover:text-purple-800 transition"
          >
            Login Admin →
          </a>
        </div>

        </section>

        {/* Pamflet / Poster */}
        <section id="info-ppdb" className="bg-white/70 backdrop-blur-lg rounded-3xl p-10 shadow-lg mb-20">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
            📢 Informasi PPDB
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

            {/* Text Info */}
            <div className="space-y-4 text-gray-700">
              <p>
                📌 <b>Pendaftaran:</b> Februari – Maret
              </p>
              <p>
                📌 <b>Syarat:</b> Fotokopi ijazah / SKL, KK, Akta, Pas Foto
              </p>
              <p>
                📌 <b>Pengumuman:</b> Online melalui website PPDB
              </p>
              <p>
                📌 <b>Jurusan:</b> Administrasi Perkantoran
              </p>
            </div>

            {/* Pamflet Image */}
            <div className="relative w-full h-[420px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/ppdb/pamflet.jpg"
                alt="Pamflet PPDB"
                fill
                className="object-contain"
              />
            </div>

          </div>
        </section>

        {/* Features */}
        <section className="bg-white/70 backdrop-blur-lg rounded-3xl p-10 shadow-lg text-gray-800">
          <h2 className="text-3xl font-bold text-center mb-10">
            🚀 Keunggulan PPDB Online
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

            <div className="rounded-2xl bg-gray-50 p-6">
              <div className="text-3xl mb-3">⚡</div>
              <p className="font-semibold">Proses Cepat</p>
            </div>

            <div className="rounded-2xl bg-gray-50 p-6">
              <div className="text-3xl mb-3">📄</div>
              <p className="font-semibold">Upload Berkas</p>
            </div>

            <div className="rounded-2xl bg-gray-50 p-6">
              <div className="text-3xl mb-3">🔒</div>
              <p className="font-semibold">Data Aman</p>
            </div>

            <div className="rounded-2xl bg-gray-50 p-6">
              <div className="text-3xl mb-3">📊</div>
              <p className="font-semibold">Monitoring Status</p>
            </div>

          </div>
        </section>

      </div>
    </main>
  );
}
