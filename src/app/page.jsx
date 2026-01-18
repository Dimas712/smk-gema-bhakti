"use client"

import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import HeroSection from "../component/Herosection"

export default function Home() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: true,
    })
  }, [])

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">

      {/* Hero Section */}
      <HeroSection />

      {/* Profil */}
      <section
        id="profil"
        data-aos="fade-up"
        className="container mx-auto py-24 px-4 flex justify-center"
      >
        <div className="max-w-3xl bg-white rounded-3xl shadow-xl p-12 text-center">
          <h3
            data-aos="fade-up"
            className="text-3xl font-bold mb-6 text-blue-600"
          >
            Profil Sekolah
          </h3>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-gray-600 leading-relaxed text-lg"
          >
            <span className="font-semibold text-gray-800">
              SMK Gema Bhakti 1 Jasinga
            </span>{" "}
            adalah lembaga pendidikan kejuruan yang berfokus pada pengembangan
            keterampilan siswa sesuai dengan kebutuhan dunia usaha dan industri.
            Kami membentuk lulusan yang profesional, adaptif, dan berdaya saing.
          </p>

          <div
            data-aos="zoom-in"
            data-aos-delay="400"
            className="w-24 h-1 bg-blue-500 mx-auto my-8 rounded-full"
          ></div>

          <div className="grid md:grid-cols-3 gap-6 text-sm">
            {[
              { title: "Berkarakter", desc: "Menanamkan disiplin & etika" },
              { title: "Kompeten", desc: "Sesuai kebutuhan industri" },
              { title: "Siap Kerja", desc: "Skill praktis & aplikatif" },
            ].map((item, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 150}
                className="bg-blue-50 p-5 rounded-2xl"
              >
                <p className="font-semibold text-blue-600 mb-1">
                  {item.title}
                </p>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jurusan */}
      <section id="jurusan" className="bg-gray-100 py-24 px-4">
        <div className="container mx-auto">
          <h3
            data-aos="fade-up"
            className="text-3xl font-bold mb-12 text-center"
          >
            Program Keahlian
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Teknik Komputer & Jaringan",
                desc: "Fokus pada jaringan komputer, hardware, dan sistem jaringan modern.",
              },
              {
                title: "Rekayasa Perangkat Lunak",
                desc: "Mempelajari pemrograman, web development, dan aplikasi modern.",
              },
              {
                title: "Multimedia",
                desc: "Desain grafis, fotografi, video editing, dan konten kreatif digital.",
              },
            ].map((item, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 200}
                className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition"
              >
                <h4 className="font-semibold text-lg mb-3">
                  {item.title}
                </h4>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visi & Misi */}
      <section id="visi" className="container mx-auto py-24 px-4">
        <h3
          data-aos="fade-up"
          className="text-3xl font-bold mb-10 text-center"
        >
          Visi & Misi
        </h3>

        <div className="grid md:grid-cols-2 gap-10">
          <div
            data-aos="fade-right"
            className="bg-white p-8 rounded-3xl shadow-md"
          >
            <p className="font-semibold text-blue-600 mb-3">Visi</p>
            <p className="text-gray-600">
              Menjadi SMK unggulan yang menghasilkan lulusan berakhlak mulia,
              kompeten, dan berdaya saing global.
            </p>
          </div>

          <div
            data-aos="fade-left"
            className="bg-white p-8 rounded-3xl shadow-md"
          >
            <p className="font-semibold text-blue-600 mb-3">Misi</p>
            <ul className="list-disc ml-5 text-gray-600 space-y-2">
              <li>Meningkatkan kualitas pembelajaran berbasis kompetensi</li>
              <li>Menjalin kerja sama dengan dunia usaha dan industri</li>
              <li>Mengembangkan karakter, soft skill, dan hard skill siswa</li>
            </ul>
          </div>
        </div>
      </section>

    </main>
  )
}
