"use client"

import { MapPin, Phone, Mail, Instagram } from "lucide-react"

export default function KontakPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">

      {/* Header */}
      <section className="bg-gradient-to-r from-green-700 to-green-800 text-white py-20 text-center mt-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Kontak Kami
        </h1>
        <p className="text-lg md:text-xl text-green-100">
          Hubungi SMK Gema Bhakti 1 Jasinga untuk informasi lebih lanjut
        </p>
      </section>

      {/* Content */}
      <section className="container mx-auto py-20 px-6 grid md:grid-cols-2 gap-12">

        {/* Informasi Kontak */}
        <div>
          <h2 className="text-2xl font-bold mb-6 text-green-700">
            Informasi Sekolah
          </h2>

          <div className="space-y-5">
            <div className="flex items-start gap-4">
              <MapPin className="text-green-700 mt-1" />
              <p>
                Jl. Raya Jasinga, Kabupaten Bogor, Jawa Barat
              </p>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="text-green-700" />
              <p>081584193392</p>
            </div>

            <div className="flex items-center gap-4">
              <Mail className="text-green-700" />
              <p>smkgemabhakti_1jasinga@yahoo.com</p>
            </div>

            <div className="flex items-center gap-4">
              <Instagram className="text-green-700" />
              <a
                href="https://www.instagram.com/smkgema_bhakti"
                target="_blank"
                className="text-green-700 hover:underline"
              >
                @smkgema_bhakti
              </a>
            </div>
          </div>
        </div>

        {/* Form Kontak */}
        <div className="bg-white rounded-3xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-green-700">
            Kirim Pesan
          </h2>

          <form className="space-y-5">
            <input
              type="text"
              placeholder="Nama Lengkap"
              className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600"
            />

            <textarea
              rows="4"
              placeholder="Pesan"
              className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600"
            />

            <button
              type="submit"
              className="w-full bg-green-700 text-white py-3 rounded-full
                         font-semibold hover:bg-green-800 transition"
            >
              Kirim Pesan
            </button>
          </form>
        </div>

      </section>

      {/* Google Maps */}
      <section className="container mx-auto px-6 pb-20">
        <div className="rounded-3xl overflow-hidden shadow-lg h-[400px]">
          <iframe
            title="Lokasi SMK Gema Bhakti 1 Jasinga"
            src="https://www.google.com/maps?q=SMK+Gema+Bhakti+Jasinga&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
          />
        </div>
      </section>

    </main>
  )
}
