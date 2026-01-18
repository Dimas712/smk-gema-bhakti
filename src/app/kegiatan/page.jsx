"use client"

import Image from "next/image"

const kegiatanList = [
  {
    title: "Upacara Bendera",
    desc: "Kegiatan rutin untuk menanamkan kedisiplinan dan nasionalisme.",
    image: "/kegiatan/upacara.jpg",
  },
  {
    title: "Praktik Kejuruan",
    desc: "Pembelajaran berbasis praktik sesuai jurusan masing-masing.",
    image: "/kegiatan/praktik.jpg",
  },
  {
    title: "Kunjungan Industri",
    desc: "Mengenal dunia kerja secara langsung melalui industri mitra.",
    image: "/kegiatan/industri.jpg",
  },
  {
    title: "Kegiatan Ekstrakurikuler",
    desc: "Pengembangan bakat dan minat siswa di luar jam pelajaran.",
    image: "/kegiatan/ekskul.jpg",
  },
  {
    title: "Lomba & Kompetisi",
    desc: "Mendorong siswa berprestasi di tingkat sekolah dan luar sekolah.",
    image: "/kegiatan/lomba.jpg",
  },
  {
    title: "Peringatan Hari Besar",
    desc: "Memperingati hari nasional dan keagamaan bersama.",
    image: "/kegiatan/hari-besar.jpg",
  },
]

export default function KegiatanPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 overflow-x-hidden">

      {/* Header */}
      <section className="bg-gradient-to-r from-green-700 text-white py-20 text-center mt-10">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Kegiatan Sekolah
        </h1>
        <p className="max-w-2xl mx-auto text-green-100">
          Berbagai kegiatan sekolah untuk membentuk karakter, keterampilan,
          dan prestasi peserta didik.
        </p>
      </section>

      {/* Content */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {kegiatanList.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-md overflow-hidden
                         hover:shadow-xl transition group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition"
                />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}

        </div>
      </section>

    </main>
  )
}
