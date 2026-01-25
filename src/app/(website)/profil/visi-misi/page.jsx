"use client"

import {useEffect} from 'react'
import AOS from "aos"
import "aos/dist/aos.css"

const VisiMisiPage = () => {
  useEffect(() => {
    AOS.init({
        duration: 1200,
        easing: "ease-out-cubic",
        once: true,
    })
  }, [])

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 overflow-x-hidden">
        <section className='bg-gradient-to-r from-green-700 text-white py-20 text-center mt-10'>
            <h1 className="text-4xl font-bold md:text-5xl mb-4" data-aos="fade-down">
                Visi dan Misi Sekolah
            </h1>
            <p className="text-xl md:text-2xl" data-aos="fade-up">
                Landasan dan arah SMK Gema Bhakti 1 Jasinga dalam mencetak lulusan
                unggul, berkarakter, dan siap kerja.
            </p>
        </section>

        {/*Konten*/}    
    <section className="container mx-auto py-24 px-4">
        <div className="grid md:grid-cols-2 gap-12">

          {/* Visi */}
          <div
            data-aos="fade-right"
            className="bg-white rounded-3xl shadow-lg p-10"
          >
            <h2 className="text-2xl font-bold text-green-700 mb-4">
              Visi Sekolah
            </h2>

            <div className="w-20 h-1 bg-green-600 mb-6 rounded-full"></div>

            <p className="text-gray-600 leading-relaxed text-lg">
              Menjadi Sekolah Menengah Kejuruan yang unggul dalam menghasilkan
              lulusan yang berakhlak mulia, kompeten di bidang keahlian,
              berwawasan lingkungan, serta mampu bersaing di dunia kerja
              dan industri.
            </p>
          </div>

          {/* Misi */}
          <div
            data-aos="fade-left"
            className="bg-white rounded-3xl shadow-lg p-10"
          >
            <h2 className="text-2xl font-bold text-green-700 mb-4">
              Misi Sekolah
            </h2>

            <div className="w-20 h-1 bg-green-600 mb-6 rounded-full"></div>

            <ul className="space-y-4 text-gray-600 text-lg list-decimal ml-5" data-aos="fade-up">
              <li>Menyelenggarakan pembelajaran berbasis kompetensi keahlian.</li>
              <li>Membentuk karakter siswa yang disiplin, jujur, dan bertanggung jawab.</li>
              <li>Menjalin kerja sama dengan dunia usaha dan dunia industri (DUDI).</li>
              <li>Meningkatkan keterampilan soft skill dan hard skill peserta didik.</li>
              <li>Mengembangkan budaya kerja dan kewirausahaan di lingkungan sekolah.</li>
            </ul>
          </div>

        </div>
      </section>
    </main>
  )
}

export default VisiMisiPage