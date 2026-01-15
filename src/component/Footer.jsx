import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-16">

        <div className="grid lg:grid-cols-4 gap-12">

          {/* School Info */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              SMK Gema Bhakti 1 Jasinga
            </h3>
            <p className="text-sm leading-relaxed">
              Sekolah Menengah Kejuruan yang berkomitmen mencetak lulusan
              berkompeten, berkarakter, dan siap kerja.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Menu Cepat
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-white">Beranda</Link></li>
              <li><Link href="/profil/sejarah" className="hover:text-white">Profil</Link></li>
              <li><Link href="/kegiatan" className="hover:text-white">Kegiatan</Link></li>
              <li><Link href="/galeri" className="hover:text-white">Galeri</Link></li>
              <li><Link href="/kontak" className="hover:text-white">Kontak</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Kontak
            </h4>
            <ul className="space-y-3 text-sm">
              <li>📍 Jl. Pendidikan No. 123, Jasinga, Bogor</li>
              <li>📞 <a href="https://wa.me/628xxxxxxxxxx" className="hover:text-white">08xxxxxxxxxx</a></li>
              <li>✉️ <a href="mailto:info@smkgemabhakti.sch.id" className="hover:text-white">info@smkgemabhakti.sch.id</a></li>
            </ul>

            {/* Social Media */}
            <div className="flex items-center gap-4 mt-6">
              {/* Instagram */}
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full
                           bg-gray-800 hover:bg-pink-600 transition"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2z"/>
                  <path d="M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10z"/>
                  <circle cx="17.5" cy="6.5" r="1"/>
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full
                           bg-gray-800 hover:bg-red-600 transition"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a2.96 2.96 0 0 0-2.084-2.095C19.577 3.5 12 3.5 12 3.5s-7.577 0-9.414.591A2.96 2.96 0 0 0 .502 6.186 31.53 31.53 0 0 0 0 12a31.53 31.53 0 0 0 .502 5.814 2.96 2.96 0 0 0 2.084 2.095C4.423 20.5 12 20.5 12 20.5s7.577 0 9.414-.591a2.96 2.96 0 0 0 2.084-2.095A31.53 31.53 0 0 0 24 12a31.53 31.53 0 0 0-.502-5.814z"/>
                  <path d="M9.75 15.5v-7l6 3.5-6 3.5z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Maps */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Lokasi Sekolah
            </h4>
            <iframe
              title="Lokasi SMK Gema Bhakti"
              src="https://www.google.com/maps?q=SMK+Gema+Bhakti+Jasinga&output=embed"
              className="w-full h-48 rounded-xl border-0"
              loading="lazy"
            ></iframe>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-14 pt-6 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} SMK Gema Bhakti 1 Jasinga. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
