"use client"

import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

export default function TataTertibPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: true,
    })
  }, [])

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 overflow-x-hidden">

      {/* Header */}
      <section className="bg-gradient-to-r from-green-700 py-20 text-white text-center mt-10">
        <h1
          data-aos="fade-down"
          className="text-4xl md:text-5xl font-extrabold mb-4"
        >
          Tata Tertib Peserta Didik
        </h1>
        <p
          data-aos="fade-up"
          className="max-w-3xl mx-auto text-green-100 text-lg"
        >
          Peraturan sekolah yang bertujuan membentuk peserta didik
          yang disiplin, bertanggung jawab, dan berakhlak mulia.
        </p>
      </section>

      {/* Content */}
      <section className="container mx-auto py-24 px-6 space-y-16">

        {/* A. Kewajiban */}
        <div data-aos="fade-up" className="bg-white rounded-3xl shadow-lg p-10">
          <h2 className="text-2xl font-bold text-green-700 mb-6">
            A. Kewajiban Peserta Didik
          </h2>
          <ul className="list-decimal ml-6 space-y-3 text-gray-700 leading-relaxed">
            <li>Hadir di sekolah tepat waktu sesuai jadwal.</li>
            <li>Mengikuti seluruh kegiatan pembelajaran dan upacara.</li>
            <li>Memakai seragam sekolah sesuai ketentuan yang berlaku.</li>
            <li>Menjaga nama baik sekolah di dalam dan di luar lingkungan sekolah.</li>
            <li>Menjaga kebersihan, ketertiban, dan keamanan lingkungan sekolah.</li>
          </ul>
        </div>

        {/* B. Larangan */}
        <div data-aos="fade-up" data-aos-delay="100" className="bg-white rounded-3xl shadow-lg p-10">
          <h2 className="text-2xl font-bold text-red-600 mb-6">
            B. Larangan Peserta Didik
          </h2>
          <ul className="list-decimal ml-6 space-y-3 text-gray-700 leading-relaxed">
            <li>Membawa atau menggunakan narkoba, minuman keras, dan rokok.</li>
            <li>Melakukan tindakan perundungan (bullying) dalam bentuk apa pun.</li>
            <li>Membawa senjata tajam atau benda berbahaya.</li>
            <li>Merusak fasilitas sekolah.</li>
            <li>Menggunakan handphone saat pelajaran tanpa izin guru.</li>
          </ul>
        </div>

        {/* C. Tata Busana */}
        <div data-aos="fade-up" data-aos-delay="200" className="bg-white rounded-3xl shadow-lg p-10">
          <h2 className="text-2xl font-bold text-blue-600 mb-6">
            C. Tata Busana
          </h2>
          <ul className="list-decimal ml-6 space-y-3 text-gray-700 leading-relaxed">
            <li>Memakai seragam sesuai hari yang ditentukan.</li>
            <li>Rambut rapi, bersih, dan tidak dicat.</li>
            <li>Tidak memakai perhiasan berlebihan.</li>
            <li>Menggunakan sepatu hitam dan kaos kaki sesuai ketentuan.</li>
          </ul>
        </div>

        {/* D. Sanksi */}
        <div data-aos="fade-up" data-aos-delay="300" className="bg-white rounded-3xl shadow-lg p-10">
          <h2 className="text-2xl font-bold text-orange-600 mb-6">
            D. Sanksi Pelanggaran
          </h2>
          <ul className="list-decimal ml-6 space-y-3 text-gray-700 leading-relaxed">
            <li>Teguran lisan atau tertulis.</li>
            <li>Pembinaan oleh wali kelas dan guru BK.</li>
            <li>Pemanggilan orang tua/wali.</li>
            <li>Sanksi sesuai tingkat pelanggaran yang berlaku di sekolah.</li>
          </ul>
        </div>

      </section>
    </main>
  )
}
