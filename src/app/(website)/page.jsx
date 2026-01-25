"use client"

import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import HeroSection from "../../component/Herosection"
import { GraduationCap, Cpu, Briefcase } from "lucide-react"

export default function Home() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: true,
    })
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-800">

      {/* Hero */}
      <HeroSection />

      {/* Profil Sekolah */}
      <section
        id="profil"
        data-aos="fade-up"
        className="container mx-auto py-24 px-4 flex justify-center"
      >
        <div className="max-w-4xl bg-white rounded-3xl shadow-xl p-12 text-center relative overflow-hidden">

          {/* Accent */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-100 rounded-full blur-2xl"></div>

          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-blue-600">
            Profil Sekolah
          </h3>

          <p className="text-gray-600 leading-relaxed text-lg">
            <span className="font-semibold text-gray-800">
              SMK Gema Bhakti 1 Jasinga
            </span>{" "}
            adalah sekolah kejuruan yang membekali siswa dengan
            <span className="font-semibold text-blue-600">
              {" "}keterampilan nyata, karakter kuat, dan kesiapan kerja
            </span>{" "}
            sesuai kebutuhan dunia industri dan teknologi.
          </p>

          {/* Highlight */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              {
                icon: <GraduationCap size={32} />,
                title: "Berkarakter",
                desc: "Disiplin, etika, dan tanggung jawab",
              },
              {
                icon: <Cpu size={32} />,
                title: "Berbasis Teknologi",
                desc: "Pembelajaran IT & digital",
              },
              {
                icon: <Briefcase size={32} />,
                title: "Siap Kerja",
                desc: "Link & match dunia industri",
              },
            ].map((item, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 150}
                className="bg-blue-50 p-6 rounded-2xl text-center hover:scale-105 transition"
              >
                <div className="text-blue-600 flex justify-center mb-3">
                  {item.icon}
                </div>
                <p className="font-semibold text-blue-700 mb-1">
                  {item.title}
                </p>
                <p className="text-gray-600 text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Keahlian */}
      <section id="jurusan" className="bg-gray-100 py-24 px-4">
        <div className="container mx-auto">
          <h3
            data-aos="fade-up"
            className="text-3xl md:text-4xl font-bold mb-14 text-center"
          >
            Program Keahlian
          </h3>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Teknik Komputer & Jaringan",
                desc: "Instalasi jaringan, server, keamanan, dan troubleshooting.",
                badge: "Networking",
              },
              {
                title: "Rekayasa Perangkat Lunak",
                desc: "Pemrograman, website, aplikasi, dan sistem informasi.",
                badge: "Coding",
              },
              {
                title: "Multimedia",
                desc: "Desain grafis, video editing, animasi, dan konten kreatif.",
                badge: "Creative",
              },
            ].map((item, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 200}
                className="bg-white p-8 rounded-3xl shadow-md hover:shadow-2xl transition relative"
              >
                <span className="absolute top-5 right-5 text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
                  {item.badge}
                </span>
                <h4 className="font-semibold text-xl mb-3">
                  {item.title}
                </h4>
                <p className="text-gray-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visi & Misi */}
      <section id="visi" className="container mx-auto py-24 px-4">
        <h3
          data-aos="fade-up"
          className="text-3xl md:text-4xl font-bold mb-14 text-center"
        >
          Visi & Misi
        </h3>

        <div className="grid md:grid-cols-2 gap-12">
          <div
            data-aos="fade-right"
            className="bg-white p-10 rounded-3xl shadow-md border-l-8 border-blue-600"
          >
            <p className="font-semibold text-blue-600 mb-3 text-lg">
              Visi
            </p>
            <p className="text-gray-600">
              Menjadi SMK unggulan yang menghasilkan lulusan berkarakter,
              kompeten, inovatif, dan siap bersaing di dunia kerja maupun
              wirausaha.
            </p>
          </div>

          <div
            data-aos="fade-left"
            className="bg-white p-10 rounded-3xl shadow-md border-l-8 border-green-600"
          >
            <p className="font-semibold text-green-600 mb-3 text-lg">
              Misi
            </p>
            <ul className="list-disc ml-5 text-gray-600 space-y-2">
              <li>Pembelajaran berbasis praktik & industri</li>
              <li>Penguatan karakter & soft skill siswa</li>
              <li>Peningkatan kompetensi guru & fasilitas</li>
            </ul>
          </div>
        </div>
      </section>

    </main>
  )
}
