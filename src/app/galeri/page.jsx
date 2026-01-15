"use client"

import Image from "next/image"

const galeriList = [
  { src: "/galeri/1.jpg", title: "Kegiatan Upacara" },
  { src: "/galeri/2.jpg", title: "Praktik Kejuruan" },
  { src: "/galeri/3.jpg", title: "Kunjungan Industri" },
  { src: "/galeri/4.jpg", title: "Ekstrakurikuler" },
  { src: "/galeri/5.jpg", title: "Lomba Sekolah" },
  { src: "/galeri/6.jpg", title: "Hari Besar Nasional" },
  { src: "/galeri/7.jpg", title: "Kegiatan Siswa" },
  { src: "/galeri/8.jpg", title: "Lingkungan Sekolah" },
]

export default function GaleriPage() {
  return (
    <main className="min-h-screen bg-gray-50 pt-24">

      {/* Header */}
      <section className="bg-gradient-to-r from-green-600 to-emerald-700 text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Galeri Sekolah
        </h1>
        <p className="max-w-2xl mx-auto text-green-100">
          Dokumentasi berbagai kegiatan dan suasana di SMK Gema Bhakti 1 Jasinga.
        </p>
      </section>

      {/* Gallery Grid */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">

          {galeriList.map((item, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <div className="relative aspect-square">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-300"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <p className="text-white text-sm font-medium text-center px-4">
                  {item.title}
                </p>
              </div>
            </div>
          ))}

        </div>
      </section>

    </main>
  )
}
