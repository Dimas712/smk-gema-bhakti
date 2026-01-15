"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import AOS from "aos"
import "aos/dist/aos.css"

const images = [
  "/hero/hero1.jpg",
  "/hero/hero2.jpg",
  "/hero/hero3.jpg",
]

const HeroSection = () => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    // Init AOS
    AOS.init({
      duration: 1200,
      easing: "ease-out-cubic",
      once: true,
    })

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
      <section className="relative min-h-[85vh] overflow-hidden text-white">

    {/* Background Slider */}
    {images.map((img, index) => (
      <Image
        key={index}
        src={img}
        alt="Hero Background"
        fill
        priority={index === 0}
        className={`
          object-cover transition-opacity duration-1000
          ${index === current ? "opacity-100" : "opacity-0"}
          blur-sm scale-105
        `}
      />
    ))}

    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-r 
      from-yellow-500/80 via-amber-600/70 to-orange-700/80">
    </div>

    {/* Content */}
    <div className="relative z-10 flex items-center justify-center min-h-[85vh] pt-28 px-6">
      <div className="text-center">

        <h2
          data-aos="fade-up"
          className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-lg"
        >
          Selamat Datang di <br />
          <span className="text-yellow-200">
            SMK Gema Bhakti 1 Jasinga
          </span>
        </h2>

        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="max-w-2xl mx-auto text-lg md:text-xl text-yellow-100 leading-relaxed"
        >
          Sekolah Menengah Kejuruan yang berkomitmen mencetak lulusan
          berkompeten, berkarakter, dan siap kerja.
        </p>

        <div
          data-aos="zoom-in"
          data-aos-delay="400"
          className="mt-10 flex justify-center gap-4"
        >
          <a
            href="/profil/sejarah"
            className="px-8 py-3 rounded-full bg-yellow-400 text-gray-900
                       font-semibold hover:bg-yellow-300 transition"
          >
            Profil Sekolah
          </a>
          <a
            href="/kontak"
            className="px-8 py-3 rounded-full border border-white/80
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
