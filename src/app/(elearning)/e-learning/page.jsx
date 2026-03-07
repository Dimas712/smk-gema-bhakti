"use client";

export default function ELearningPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-100 via-white to-blue-100 px-4 py-14">
      <div className="max-w-7xl mx-auto">

        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
            E-Learning
            <span className="block text-green-700">
              SMK GEMA BHAKTI 1 JASINGA
            </span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Platform pembelajaran digital modern untuk mendukung proses belajar
            mengajar secara efektif, fleksibel, dan terintegrasi.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">

          <div className="group bg-white/70 backdrop-blur-lg rounded-3xl p-8 shadow-lg hover:shadow-2xl transition">
            <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-green-600 text-white text-3xl mb-6">
              🎓
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-gray-700">Siswa</h3>
            <p className="text-gray-600 text-sm mb-6">
              Akses materi, kerjakan tugas, ikuti kuis, dan pantau nilai secara
              online.
            </p>
            <a
              href="/e-learning/auth/login/siswa"
              className="inline-flex items-center gap-2 font-semibold text-green-700 hover:text-green-800 transition"
            >
              Masuk sebagai Siswa →
            </a>
          </div>

          <div className="group bg-white/70 backdrop-blur-lg rounded-3xl p-8 shadow-lg hover:shadow-2xl transition">
            <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-blue-600 text-white text-3xl mb-6">
              👩‍🏫
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-gray-700">Guru</h3>
            <p className="text-gray-600 text-sm mb-6">
              Kelola materi pembelajaran, tugas, kuis, dan penilaian siswa.
            </p>
            <a
              href="/e-learning/auth/login/guru"
              className="inline-flex items-center gap-2 font-semibold text-blue-700 hover:text-blue-800 transition"
            >
              Masuk sebagai Guru →
            </a>
          </div>

          <div className="group bg-white/70 backdrop-blur-lg rounded-3xl p-8 shadow-lg hover:shadow-2xl transition">
            <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-gray-800 text-white text-3xl mb-6">
              🧑‍💼
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-gray-700">Admin</h3>
            <p className="text-gray-600 text-sm mb-6">
              Kelola data pengguna, kelas, mata pelajaran, dan sistem e-learning.
            </p>
            <a
              href="/e-learning/auth/login/admin"
              className="inline-flex items-center gap-2 font-semibold text-gray-800 hover:text-black transition"
            >
              Masuk sebagai Admin →
            </a>
          </div>

        </section>

        <section className="bg-white/70 backdrop-blur-lg rounded-3xl p-10 shadow-lg text-gray-800">
          <h2 className="text-3xl font-bold text-center mb-10">
            🚀 Fitur Unggulan
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

            <div className="rounded-2xl bg-gray-50 p-6">
              <div className="text-3xl mb-3">📚</div>
              <p className="font-semibold">Materi Digital</p>
            </div>

            <div className="rounded-2xl bg-gray-50 p-6">
              <div className="text-3xl mb-3">📝</div>
              <p className="font-semibold">Tugas Online</p>
            </div>

            <div className="rounded-2xl bg-gray-50 p-6">
              <div className="text-3xl mb-3">⏱️</div>
              <p className="font-semibold">Kuis & Ulangan</p>
            </div>

            <div className="rounded-2xl bg-gray-50 p-6">
              <div className="text-3xl mb-3">📊</div>
              <p className="font-semibold">Nilai Real-Time</p>
            </div>

          </div>
        </section>

      </div>
    </main>
  );
}