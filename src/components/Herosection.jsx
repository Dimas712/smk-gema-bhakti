"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

const images = [
  "/Banner1.jpeg",
  "/LDKS.jpeg",
  "/Banner3.jpg",
]

export default function HeroSection() {
  const [current, setCurrent] = useState(0)

  // text typing
  const subtitle =
    "Sekolah Menengah Kejuruan unggulan yang berkomitmen mencetak lulusan berkompeten, berkarakter, dan siap bersaing di dunia industri."

  const [typedText, setTypedText] = useState("")
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (index < subtitle.length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + subtitle.charAt(index))
        setIndex(index + 1)
      }, 35)

      return () => clearTimeout(timeout)
    }
  }, [index])

  return (
    <section className="relative min-h-screen overflow-hidden bg-black">

      {/* Background Slider */}
      {images.map((img, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-[2000ms] ${
            i === current ? "opacity-100 z-10" : "opacity-0"
          }`}
        >
          <Image
            src={img}
            alt="Hero Background"
            fill
            sizes="100vw"
            priority={i === 0}
            className="object-contain md:object-cover scale-100 md:scale-110 transition-transform duration-[7000ms]"
          />
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80 z-20" />

      {/* Content */}
      <div className="relative z-30 flex items-center justify-center min-h-screen px-6">

        <div className="text-center max-w-4xl">

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Selamat Datang di <br />
            <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
              SMK GEMA BHAKTI 1 JASINGA
            </span>
          </h1>

          {/* Typing Subtitle */}
          <p className="mt-6 text-gray-200 text-lg md:text-xl max-w-3xl mx-auto min-h-[80px]">
            {typedText}
            <span className="animate-pulse">|</span>
          </p>

          {/* Button */}
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

      {/* Slider Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition ${
              current === i ? "bg-yellow-400 scale-125" : "bg-white/40"
            }`}
          />
        ))}
      </div>

    </section>
  )
}