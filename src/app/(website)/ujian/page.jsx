"use client";

import { useEffect, useState, useRef } from "react";
import {
  Calendar,
  Clock,
  BookOpen,
  Lock,
  FileText,
  X
} from "lucide-react";
import jadwalUjian from "@/data/jadwalUjian"; 
import Swal from "sweetalert2";
import PdfToImage from "@/components/PdfToImage";

export default function UjianPage() {
  const [now, setNow] = useState(new Date());
  const [kelasAktif, setKelasAktif] = useState("X");
  const [fileAktif, setFileAktif] = useState(null);
  const halamanSudahAktif = useRef(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

useEffect(() => {
  if (!fileAktif) return;

  const audio = new Audio("/music/sound.mp3");

  const triggerPeringatan = async () => {

    // cegah popup berkali-kali
    if (halamanSudahAktif.current) return;

    halamanSudahAktif.current = true;

    // bunyi
    audio.currentTime = 0;
    audio.play().catch(() => {});

    // getar HP
    if ("vibrate" in navigator) {
      navigator.vibrate([500, 200, 500]);
    }

    await Swal.fire({
      icon: "warning",
      title: "Peringatan!",
      text: "Anda terdeteksi keluar dari mode ujian.",
      confirmButtonColor: "#dc2626",
      allowOutsideClick: false,
      allowEscapeKey: false
    });

    // reset supaya bisa muncul lagi nanti
    setTimeout(() => {
      halamanSudahAktif.current = false;
    }, 1000);

  };

  

  // pindah tab / minimize
  const handleVisibility = () => {
    if (
      document.visibilityState === "hidden"
    ) {
      triggerPeringatan();
    }
  };

  // keluar fullscreen
  const handleFullscreen = async () => {
    if (
      fileAktif &&
      !document.fullscreenElement
    ) {

      triggerPeringatan();

      // paksa masuk fullscreen lagi
      try {
        await document.documentElement.requestFullscreen();
      } catch (err) {}
    }
  };

  // kehilangan fokus
  const handleBlur = () => {
    triggerPeringatan();
  };

  // blok ESC
  const handleKeyDown = (e) => {

    if (
      (e.ctrlKey && e.key==="c") ||
      (e.ctrlKey && e.key==="a") ||
      (e.ctrlKey && e.key==="p") ||
      (e.ctrlKey && e.key==="s")
    ) {
      e.preventDefault();
    }

  };

  window.addEventListener(
    "blur",
    handleBlur
  );

  document.addEventListener(
    "visibilitychange",
    handleVisibility
  );

  document.addEventListener(
    "fullscreenchange",
    handleFullscreen
  );

  document.addEventListener(
    "keydown",
    handleKeyDown
  );

  return () => {

    window.removeEventListener(
      "blur",
      handleBlur
    );

    document.removeEventListener(
      "visibilitychange",
      handleVisibility
    );

    document.removeEventListener(
      "fullscreenchange",
      handleFullscreen
    );

    document.removeEventListener(
      "keydown",
      handleKeyDown
    );

  };

}, [fileAktif]);

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

    {jadwalUjian[kelasAktif].map((hari, i) => (

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
              {hari.mapel.length} Mata Pelajaran
            </p>

          </div>

        </div>

        <div className="grid lg:grid-cols-3 gap-6">

          {hari.mapel.map((item, j) => {

            const mulai = new Date(item.mulai);
            const selesai = new Date(item.selesai);

            let status = "Belum Dimulai";

            if (now >= mulai && now <= selesai) {
              status = "Tersedia";
            } else if (now > selesai) {
              status = "Selesai";
            }

            return (

              <div
                key={j}
                className="
                bg-white rounded-2xl p-6
                shadow-md hover:shadow-xl
                hover:-translate-y-2
                transition-all duration-300 border
                "
              >

                <div className="flex justify-between items-start">

                  <div>

                    <div className="flex items-center gap-2">

                      <BookOpen className="text-green-600"/>

                      <h3 className="font-bold text-xl text-gray-800">
                        {item.nama}
                      </h3>

                    </div>

                    <div className="mt-4 space-y-2">

                      {/* Tanggal */}

                      <p className="flex items-center gap-2 text-gray-500">

                        <Calendar size={16}/>

                        {mulai.toLocaleDateString("id-ID",{
                          weekday:"long",
                          day:"numeric",
                          month:"long",
                          year:"numeric"
                        })}

                      </p>

                      {/* Jam */}

                      <p className="flex items-center gap-2 text-gray-500">

                        <Clock size={16}/>

                        {mulai.toLocaleTimeString("id-ID",{
                          hour:"2-digit",
                          minute:"2-digit"
                        })}

                        {" - "}

                        {selesai.toLocaleTimeString("id-ID",{
                          hour:"2-digit",
                          minute:"2-digit"
                        })}

                      </p>

                    </div>

                  </div>

                  {/* Status */}

                  {status==="Tersedia" && (
                    <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm">
                      Tersedia
                    </span>
                  )}

                  {status==="Belum Dimulai" && (
                    <span className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-sm">
                      Belum Mulai
                    </span>
                  )}

                  {status==="Selesai" && (
                    <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm">
                      Selesai
                    </span>
                  )}

                </div>

                {/* Tombol */}

                {status==="Tersedia" ? (

              <button
                onClick={async () => {

                  setFileAktif(item.file);

                  // masuk fullscreen otomatis
                  if (!document.fullscreenElement) {
                    try {
                      await document.documentElement.requestFullscreen();
                    } catch (err) {
                      console.log("Fullscreen gagal:", err);
                    }
                  }

                }}
                className="
                mt-6 w-full flex items-center
                justify-center gap-2
                bg-gradient-to-r
                from-green-600 to-emerald-500
                text-white py-3 rounded-xl
                font-semibold hover:scale-105
                transition
                "
              >
                <FileText size={18}/>
                Buka Soal
              </button>

                ) : (

                  <button
                    disabled
                    className="
                    mt-6 w-full flex items-center
                    justify-center gap-2
                    bg-gray-200 text-gray-500
                    py-3 rounded-xl cursor-not-allowed
                    "
                  >

                    <Lock size={18}/>

                    {status==="Belum Dimulai"
                      ? "Belum Dimulai"
                      : "Ujian Selesai"}

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

    {fileAktif && (

    <div className="
    fixed inset-0
    bg-black/60
    z-50
    flex items-center justify-center
    p-5
    ">

      <div className="
      bg-white rounded-3xl
      w-full h-[90vh]
      max-w-6xl
      overflow-hidden
      shadow-2xl
      ">

        {/* Header */}

        <div className="
        flex justify-between items-center
        px-6 py-4
        border-b
        ">

          <h2 className="font-bold text-xl">
            Soal Ujian
          </h2>

          <button
            onClick={() => {

              setFileAktif(null);

              if (document.fullscreenElement) {
                document.exitFullscreen();
              }

            }}
            className="
            p-2 rounded-full
            bg-red-500 text-white
            hover:scale-110
            hover:bg-red-600
            transition
            "
          >

            <X size={20} />

          </button>

        </div>

        {/* PDF */}

      <div className="h-full overflow-auto">

        <PdfToImage
            file={fileAktif}
        />

      </div>

      </div>

    </div>

    )}

    </main>
  );
}