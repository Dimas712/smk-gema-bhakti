"use client"

import {useEffect, useRef} from "react"
import Image from "next/image"
import guruStaf from "@/data/guruStaf"
import "aos/dist/aos.css"
import AOS from "aos"

export default function GuruStaffPage() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-out-cubic",
      once: true,
    })
  }, [])

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
    <main className="min-h-screen bg-gray-50 text-gray-800 overflow-x-hidden">

      {/* Header */}
      <section className="bg-gradient-to-r from-green-700 text-white py-20 text-center mt-10">
        <h1 className="ttext-4xl font-bold md:text-5xl mb-4" data-aos="fade-down">
          Guru & Staff
        </h1>
        <p className="text-xl md:text-2xl" data-aos="fade-up">
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
          {guruStaf.map((item, index) => (
            <div
              key={index}
              className="min-w-[260px] bg-white rounded-3xl shadow-md
                         hover:shadow-xl transition overflow-hidden text-center"
            >
            <div className="relative w-full h-64 bg-gradient-to-br from-gray-100 to-gray-200 
                            flex items-center justify-center p-4">
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-white">
                <Image
                  src={item.foto}
                  alt={item.nama}
                  fill
                  className="object-contain p-2"
                />
              </div>
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
