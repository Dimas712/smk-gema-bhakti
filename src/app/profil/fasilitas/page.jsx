import Image from "next/image"

const fasilitasList = [
  {
    nama: "Laboratorium Komputer",
    deskripsi:
      "Fasilitas laboratorium komputer dengan perangkat modern untuk menunjang pembelajaran praktik.",
    gambar: "/fasilitas/lab-komputer.jpg",
  },
  {
    nama: "Perpustakaan",
    deskripsi:
      "Perpustakaan dengan koleksi buku pelajaran, referensi, dan ruang baca yang nyaman.",
    gambar: "/fasilitas/perpustakaan.jpg",
  },
  {
    nama: "Ruang Kelas",
    deskripsi:
      "Ruang kelas yang nyaman, bersih, dan dilengkapi fasilitas pembelajaran.",
    gambar: "/fasilitas/kelas.jpg",
  },
  {
    nama: "Lapangan Olahraga",
    deskripsi:
      "Lapangan olahraga untuk mendukung aktivitas fisik dan pengembangan bakat siswa.",
    gambar: "/fasilitas/lapangan.jpg",
  },
  {
    nama: "Mushola",
    deskripsi:
      "Mushola yang bersih dan nyaman untuk kegiatan ibadah seluruh warga sekolah.",
    gambar: "/fasilitas/mushola.jpg",
  },
]

export default function FasilitasPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">

      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Fasilitas Sekolah</h1>
        <p className="max-w-2xl mx-auto text-blue-100">
          Fasilitas pendukung pembelajaran dan kegiatan siswa di SMK Gema Bhakti.
        </p>
      </section>

      {/* Content */}
      <section className="container mx-auto py-20 px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {fasilitasList.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-md hover:shadow-xl transition overflow-hidden"
            >
              <div className="relative w-full h-56">
                <Image
                  src={item.gambar}
                  alt={item.nama}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2">
                  {item.nama}
                </h3>
                <p className="text-gray-600 text-sm">
                  {item.deskripsi}
                </p>
              </div>
            </div>
          ))}

        </div>
      </section>

    </main>
  )
}
