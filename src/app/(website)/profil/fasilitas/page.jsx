"use client"

import Image from "next/image"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

const fasilitasList = [
  {
    nama: "Laboratorium Komputer",
    deskripsi:
      "Fasilitas laboratorium komputer dengan perangkat modern untuk menunjang pembelajaran praktik.",
    gambar: "/fasilitas/lab-komputer.jpg",
  },
  {
    nama: "Perpustakaan",
    deskripsi:
      "Perpustakaan dengan koleksi buku pelajaran, referensi, dan ruang baca yang nyaman.",
    gambar: "/fasilitas/perpustakaan.jpg",
  },
  {
    nama: "Ruang Kelas",
    deskripsi:
      "Ruang kelas yang nyaman, bersih, dan dilengkapi fasilitas pembelajaran.",
    gambar: "/fasilitas/kelas.jpg",
  },
  {
    nama: "Lapangan Olahraga",
    deskripsi:
      "Lapangan olahraga untuk mendukung aktivitas fisik dan pengembangan bakat siswa.",
    gambar: "/fasilitas/lapangan.jpg",
  },
  {
    nama: "Mushola",
    deskripsi:
      "Mushola yang bersih dan nyaman untuk kegiatan ibadah seluruh warga sekolah.",
    gambar: "/fasilitas/mushola.jpg",
  },
]

export default function FasilitasPage() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-out-cubic",
      once: true,
    })
  }, [])

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 overflow-x-hidden">

      {/* Header */}
      <section className="bg-gradient-to-r from-green-700 text-white py-20 text-center mt-10">
        <h1 className="text-4xl font-bold md:text-5xl mb-4" data-aos="fade-down">
          Fasilitas Sekolah
        </h1>
        <p className="text-xl md:text-2xl" data-aos="fade-up">
          Fasilitas pendukung pembelajaran dan kegiatan siswa di SMK Gema Bhakti.
        </p>
      </section>

      {/* Content */}
      <section className="container mx-auto py-20 px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {fasilitasList.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-md hover:shadow-xl transition overflow-hidden"
            >
              <div className="relative w-full h-56">
                <Image
                  src={item.gambar}
                  alt={item.nama}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2">
                  {item.nama}
                </h3>
                <p className="text-gray-600 text-sm">
                  {item.deskripsi}
                </p>
              </div>
            </div>
          ))}

        </div>
      </section>

    </main>
  )
}
