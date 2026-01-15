"use client"

import {useEffect} from 'react'
import AOS from "aos"
import "aos/dist/aos.css"

export default function SejarahSingkat() {
  useEffect(() => {
    AOS.init({
        duration: 1200,
        easing: "ease-out-cubic",
        once: true,
    })
  }, [])

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 mt-15 overflow-x-hidden">

      {/* Header */}
      <section className="bg-gradient-to-r from-green-700 py-20 text-center py-20 text-white">
        <h1 className="text-4xl font-bold md:text-5xl mb-4" data-aos="fade-up">
          Sejarah Singkat
        </h1>
        <p className="text-xl md:text-2xl" data-aos="fade-up">
          Perjalanan dan perkembangan SMK Gema Bhakti dari awal berdiri
          hingga sekarang.
        </p>
      </section>

      {/* Content */}
      <section className="container mx-auto py-20 px-4 flex justify-center">
        <div className="max-w-4xl bg-white rounded-3xl shadow-xl p-10">

          <p className="text-gray-600 leading-relaxed mb-6 text-lg">
            <span className="font-semibold text-gray-800">
              SMK Gema Bhakti
            </span>{" "}
            didirikan sebagai bentuk komitmen dalam meningkatkan kualitas
            pendidikan kejuruan yang berorientasi pada kebutuhan dunia usaha
            dan industri.
          </p>

          <p className="text-gray-600 leading-relaxed mb-6">
            Sejak awal berdiri, SMK Gema Bhakti terus berkembang dengan
            meningkatkan kualitas pembelajaran, sarana dan prasarana,
            serta menjalin kerja sama dengan berbagai pihak industri.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Hingga saat ini, SMK Gema Bhakti telah melahirkan lulusan yang
            kompeten, berkarakter, dan siap bersaing di dunia kerja maupun
            melanjutkan pendidikan ke jenjang yang lebih tinggi.
          </p>

          {/* Timeline sederhana */}
          <div className="mt-10 grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-blue-50 p-6 rounded-2xl">
              <p className="text-2xl font-bold text-blue-600">20XX</p>
              <p className="text-gray-600 mt-2">Tahun Berdiri</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-2xl">
              <p className="text-2xl font-bold text-blue-600">3+</p>
              <p className="text-gray-600 mt-2">Program Keahlian</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-2xl">
              <p className="text-2xl font-bold text-blue-600">Ratusan</p>
              <p className="text-gray-600 mt-2">Alumni</p>
            </div>
          </div>

        </div>
      </section>

    </main>
  )
}
