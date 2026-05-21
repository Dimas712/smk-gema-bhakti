"use client";

import { useEffect, useState } from "react";
import {
  Calendar,
  Clock,
  BookOpen,
  Lock,
  FileText,
} from "lucide-react";
import jadwalUjian from "@/data/jadwalUjian"; 

export default function UjianPage() {
  const [now, setNow] = useState(new Date());
  const [kelasAktif, setKelasAktif] = useState("X");

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative overflow-hidden min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-100">

      {/* HERO */}
      <section className="pt-32 pb-16 px-6">

        <div className="max-w-6xl mx-auto text-center">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 font-medium mb-6">
            <Calendar size={18}/>
            Jadwal Ujian Semester
          </div>

          <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
            Penilaian Akhir Semester
          </h1>

          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Silakan lihat jadwal ujian dan buka soal sesuai waktu yang telah ditentukan.
          </p>

        </div>

      </section>

      <div className="flex justify-center gap-5 mb-10">

      {["X","XI"].map((kelas)=>(

        <button
          key={kelas}
          onClick={()=>setKelasAktif(kelas)}
          className={`
          px-8 py-5 rounded-2xl font-bold text-lg
          transition-all duration-300 shadow-lg

          ${
            kelasAktif===kelas
            ? "bg-gradient-to-r from-green-600 to-emerald-500 text-white scale-105"
            : "bg-white text-gray-700 hover:scale-105"
          }
          `}
        >

          <div className="flex flex-col items-center">

            <span className="text-2xl">
              Kelas {kelas}
            </span>

            <span className="text-sm opacity-80">
              Jadwal Ujian
            </span>

          </div>

        </button>

      ))}

</div>

      <div className="max-w-7xl mx-auto px-6 pb-20">

        <div className="space-y-10">

          {jadwalUjian[kelasAktif].map((hari,i)=>(

            <div
              key={i}
              className="bg-white/70 backdrop-blur-lg rounded-3xl shadow-xl p-8 border border-white"
            >

              {/* Header Hari */}

              <div className="flex items-center gap-3 mb-8">

                <div className="p-3 rounded-2xl bg-green-100">
                  <Calendar className="text-green-700"/>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-gray-800">
                    {hari.hari}
                  </h2>

                  <p className="text-gray-500">
                    4 Mata Pelajaran
                  </p>
                </div>

              </div>

              <div className="grid lg:grid-cols-3 gap-6">

                {hari.mapel.map((item, j) => {

                  const mulai = new Date(item.mulai);

                  const aktif = now >= mulai;

                  return (

                    <div
                      key={j}
                      className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border"
                    >

                      <div className="flex justify-between items-start">

                        <div>

                          <div className="flex items-center gap-2">

                            <BookOpen
                            className="text-green-600"/>

                            <h3 className="font-bold text-xl text-gray-800">
                              {item.nama}
                            </h3>

                          </div>

                          <div className="mt-4 space-y-2">

                            <p className="flex items-center gap-2 text-gray-500">

                              <Clock size={16}/>

                              {mulai.toLocaleString()}

                            </p>

                          </div>

                        </div>

                        {aktif ? (
                          <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm">
                            Tersedia
                          </span>
                        ) : (
                          <span className="px-3 py-1 rounded-full bg-red-100 text-red-600 text-sm">
                            Terkunci
                          </span>
                        )}

                      </div>

                      {aktif ? (

                        <a
                          href={item.file}
                          target="_blank"
                          className="mt-6 w-full flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-emerald-500 text-white py-3 rounded-xl font-semibold hover:scale-105 transition"
                        >
                          <FileText size={18}/>
                          Buka Soal
                        </a>

                      ) : (

                        <button
                          disabled
                          className="mt-6 w-full flex items-center justify-center gap-2 bg-gray-200 text-gray-500 py-3 rounded-xl cursor-not-allowed"
                        >

                          <Lock size={18}/>
                          Belum Dimulai

                        </button>

                      )}

                    </div>

                  )

                })}

              </div>

            </div>

          ))}

        </div>

      </div>

    </main>
  );
}