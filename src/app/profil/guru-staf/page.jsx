"use client"

import { useRef } from "react"
import Image from "next/image"

const guruStaff = [
  {
    nama: "Drs. Ahmad Sudirman",
    jabatan: "Kepala Sekolah",
    foto: "/guru/kepsek.jpg",
  },
  {
    nama: "Siti Aminah, S.Pd",
    jabatan: "Wakil Kepala Sekolah",
    foto: "/guru/wakasek.jpg",
  },
  {
    nama: "Budi Santoso, S.Kom",
    jabatan: "Wakasek Kurikulum",
    foto: "/guru/guru-rpl.jpg",
  },
  {
    nama: "Rina Lestari, S.Pd",
    jabatan: "Wakasek Kesiswaan",
    foto: "/guru/guru-mm.jpg",
  },
  {
    nama: "Andi Pratama",
    jabatan: "Staff Tata Usaha",
    foto: "/guru/staff-tu.jpg",
  },
]

export default function GuruStaffPage() {
  const sliderRef = useRef(null)

  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    })
  }

  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    })
  }

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">

      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Guru & Staff</h1>
        <p className="max-w-2xl mx-auto text-blue-100">
          Tenaga pendidik dan kependidikan SMK Gema Bhakti yang profesional
          dan berdedikasi.
        </p>
      </section>

      {/* Slider Section */}
      <section className="container mx-auto py-20 px-4 relative">

        {/* Arrow Left */}
        <button
          onClick={scrollLeft}
          className="hidden md:flex items-center justify-center
                     absolute left-0 top-1/2 -translate-y-1/2
                     w-12 h-12 bg-white rounded-full shadow-lg
                     hover:bg-gray-100 z-10"
        >
          ←
        </button>

        {/* Arrow Right */}
        <button
          onClick={scrollRight}
          className="hidden md:flex items-center justify-center
                     absolute right-0 top-1/2 -translate-y-1/2
                     w-12 h-12 bg-white rounded-full shadow-lg
                     hover:bg-gray-100 z-10"
        >
          →
        </button>

        {/* Slider */}
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide px-4"
        >
          {guruStaff.map((item, index) => (
            <div
              key={index}
              className="min-w-[260px] bg-white rounded-3xl shadow-md
                         hover:shadow-xl transition overflow-hidden text-center"
            >
              <div className="relative w-full h-56">
                <Image
                  src={item.foto}
                  alt={item.nama}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="font-semibold text-lg">
                  {item.nama}
                </h3>
                <p className="text-sm text-blue-600">
                  {item.jabatan}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Hint Mobile */}
        <p className="text-center text-sm text-gray-500 mt-6 md:hidden">
          Geser ke kanan atau kiri untuk melihat lainnya
        </p>

      </section>

    </main>
  )
}
