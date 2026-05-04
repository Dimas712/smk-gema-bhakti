"use client";

import { motion } from "framer-motion";

export default function RoadmapPPDB() {
  const steps = [
    {
      title: "Pendaftaran Online",
      desc: "Isi formulir pendaftaran melalui Google Form sesuai data diri.",
      icon: "📝",
    },
    {
      title: "Verifikasi Berkas",
      desc: "Panitia akan memverifikasi data dan berkas yang telah diupload.",
      icon: "📂",
    },
    {
      title: "Pengumuman",
      desc: "Hasil seleksi diinformasikan melalui grup WhatsApp resmi.",
      icon: "📢",
    },
    {
      title: "Daftar Ulang",
      desc: "Peserta yang lolos wajib melakukan daftar ulang sesuai jadwal.",
      icon: "✅",
    },
    {
      title: "Resmi Menjadi Siswa",
      desc: "Selamat! Anda resmi menjadi bagian dari SMK Gema Bhakti 1 Jasinga 🎉",
      icon: "🎓",
    },
  ];

  return (
    <section className="bg-white/70 backdrop-blur-lg rounded-3xl p-10 shadow-lg mb-20">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
        🛣️ Alur Pendaftaran PPDB
      </h2>

      <div className="grid md:grid-cols-5 gap-6">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-6 shadow-md text-center hover:shadow-xl transition"
          >
            <div className="text-4xl mb-4">{step.icon}</div>
            <h3 className="font-semibold text-gray-800 mb-2">
              {i + 1}. {step.title}
            </h3>
            <p className="text-sm text-gray-600">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}