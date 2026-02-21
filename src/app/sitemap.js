export default function sitemap() {
  const baseUrl = "https://smkgb1jasinga.vercel.app" // ganti ke domain asli jika sudah ada

  const now = new Date()

  return [
    // Home
    {
      url: `${baseUrl}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },

    // Profil Sekolah
    {
      url: `${baseUrl}/profil/sejarah`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },

    // Visi & Misi
    {
      url: `${baseUrl}/profil/visi-misi`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },

    // Program Keahlian / Jurusan
    {
      url: `${baseUrl}/profil/tata-tertib`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // Kegiatan Sekolah
    {
      url: `${baseUrl}/kegiatan`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },

    // Galeri
    {
      url: `${baseUrl}/galeri`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },

    // Kontak
    {
      url: `${baseUrl}/kontak`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ]
}
