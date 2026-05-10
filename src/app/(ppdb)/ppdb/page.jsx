"use client";

import Image from "next/image";

export default function PPDBPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-yellow-100 via-white to-green-100 px-4 py-14">
      <div className="max-w-7xl mx-auto">

        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
            PPDB ONLINE
            <span className="block text-green-700">
              SMK GEMA BHAKTI 1 JASINGA
            </span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Penerimaan Peserta Didik Baru tahun ajaran terbaru.
            Daftar sekarang dan jadilah bagian dari sekolah kejuruan
            unggulan yang siap mencetak lulusan berkarakter dan siap kerja.
          </p>
        </section>

        {/* Role Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">

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
              melalui Google Form.
            </p>
            <a
              href="https://forms.gle/avcp3MCXeg3cEhVu5"
              target="_blank"
              className="inline-flex items-center gap-2 font-semibold text-green-700 hover:text-green-800 transition"
            >
              Daftar Sekarang →
            </a>
          </div>

          {/* Login Admin 
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
          */}

          {/*
          Login Peserta (sementara dinonaktifkan)

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
          */}

        </section>

        {/* Pamflet */}
        <section id="info-ppdb" className="bg-white/70 backdrop-blur-lg rounded-3xl p-10 shadow-lg mb-20">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
            📢 Informasi PPDB
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

            <div className="space-y-4 text-gray-700">
              <p>📌 <b>Pendaftaran:</b></p>
              <ul className="list-disc ml-5 space-y-1">
                <li>Gelombang 1: 30 April – 31 Mei 2026</li>
                <li>Gelombang 2: 1 Juni – 30 Juni 2026</li>
                <li>Gelombang 3: 1 Juli – 13 Juli 2026</li>
              </ul>

              <p>📌 <b>Daftar Ulang:</b></p>
              <ul className="list-disc ml-5 space-y-1">
                <li>Gelombang 1 & 2: 30 Juni 2026</li>
                <li>Gelombang 3: 10 Juli 2026</li>
              </ul>

              <p>📌 <b>Syarat:</b> Fotokopi ijazah / SKL, KK, Akta Kelahiran, Surat Keterangan Sehat, Pas Foto 3x4</p>
              <p>📌 <b>Pengumuman:</b> Diinformasikan melalui Grup WhatsApp</p>
              <p>📌 <b>Jurusan:</b> Manajemen Perkantoran & Layanan Bisnis (MPLB)</p>
              <p className="mt-4 text-green-700 font-semibold">
                🎓 Program Khusus: Gratis SPP selama 3 tahun untuk siswa Yatim
              </p>
            </div>

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
 {/* Roadmap / Alur PPDB Modern */}
{/* Roadmap / Alur PPDB Modern */}
<section className="bg-white/70 backdrop-blur-lg rounded-3xl p-10 shadow-lg mb-20 overflow-hidden">
  <h2 className="text-3xl font-bold text-center mb-14 text-gray-800">
    🚀 Alur Pendaftaran PPDB
  </h2>

  <div className="relative">

    {/* Garis Alur */}
    <div className="hidden md:block absolute top-20 left-0 w-full h-3 bg-green-200 rounded-full"></div>

    {/* Steps */}
    <div className="grid grid-cols-1 md:grid-cols-5 gap-10 relative z-10">

      {[
        {
          icon: "📝",
          title: "Isi Formulir",
          desc: "Calon siswa mengisi formulir PPDB online dengan data lengkap dan benar.",
          color: "bg-green-600",
        },
        {
          icon: "📲",
          title: "Notifikasi WhatsApp",
          desc: "Peserta akan mendapatkan pesan WhatsApp bahwa pendaftaran berhasil dilakukan.",
          color: "bg-blue-600",
        },
        {
          icon: "👥",
          title: "Masuk Grup WA",
          desc: "Peserta akan diarahkan masuk ke grup WhatsApp resmi PPDB untuk informasi lanjutan.",
          color: "bg-purple-600",
        },
        {
          icon: "📂",
          title: "Persiapan Berkas",
          desc: "Peserta membawa berkas seperti KK, Akta, Ijazah/SKL, Pas Foto, dan surat kesehatan.",
          color: "bg-yellow-500",
        },
        {
          icon: "🎓",
          title: "Daftar Ulang",
          desc: "Peserta melakukan daftar ulang sesuai jadwal yang telah ditentukan sekolah.",
          color: "bg-red-500",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center group"
        >

          {/* Circle */}
          <div
            className={`w-20 h-20 rounded-full ${item.color} text-white flex items-center justify-center text-3xl shadow-xl border-4 border-white group-hover:scale-110 transition duration-300`}
          >
            {item.icon}
          </div>

          {/* Content */}
          <div className="mt-5">
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              {item.title}
            </h3>

            <p className="text-sm text-gray-600 leading-relaxed">
              {item.desc}
            </p>
          </div>
        </div>
      ))}

    </div>

    {/* Finish Badge */}
    <div className="flex justify-center mt-14">
      <div className="bg-gradient-to-r from-green-600 to-green-500 text-white px-8 py-4 rounded-full shadow-lg text-lg font-semibold animate-pulse text-center">
        🎉 Selamat Datang di SMK Gema Bhakti 1 Jasinga
      </div>
    </div>

  </div>
</section>

      </div>
    </main>
  );
}