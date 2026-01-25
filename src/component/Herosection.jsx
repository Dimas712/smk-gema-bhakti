"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import AOS from "aos"
import "aos/dist/aos.css"

const images = [
  "/Banner1.jpg",
  "/LDKS.jpeg",
  "/Banner3.jpg",
]

const HeroSection = () => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-out-cubic",
      once: true,
    })

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden mt-10">

      {/* Background Slider */}
      {images.map((img, index) => (
        <Image
          key={index}
          src={img}
          alt="Hero Background"
          fill
          priority={index === 0}
          className={`object-cover transition-opacity duration-1000 
          ${index === current ? "opacity-100" : "opacity-0"}`}
        />
      ))}

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
        <div
          data-aos="fade-up"
          className="max-w-4xl text-center"
        >

          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-white leading-tight">
            Selamat Datang di <br />
            <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
              SMK Gema Bhakti 1 Jasinga
            </span>
          </h1>

          <p className="text-gray-200 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Sekolah Menengah Kejuruan unggulan yang berkomitmen mencetak lulusan
            berkompeten, berkarakter, dan siap bersaing di dunia industri.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="/profil/sejarah"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400
                         text-gray-900 font-semibold shadow-lg hover:scale-105 transition"
            >
              Profil Sekolah
            </a>

            <a
              href="/kontak"
              className="px-8 py-3 rounded-full border border-white/40 text-white
                         hover:bg-white hover:text-gray-900 transition"
            >
              Hubungi Kami
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}

export default HeroSection
