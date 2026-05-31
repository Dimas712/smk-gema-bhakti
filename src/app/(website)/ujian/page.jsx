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
  const [soalAktif, setSoalAktif] = useState(null);
  const halamanSudahAktif = useRef(false);
  const [pelanggaran, setPelanggaran] = useState({});
  const [soalTerkunci, setSoalTerkunci] = useState({});
  const [sisaWaktu, setSisaWaktu] = useState("");

  const suaraSelesai = () => {
  window.speechSynthesis.cancel();

  const speech = new SpeechSynthesisUtterance(
    "Anda telah menyelesaikan ujian."
  );

  speech.lang = "id-ID";
  speech.rate = 0.9;
  speech.pitch = 1;
  speech.volume = 1;

  window.speechSynthesis.speak(speech);
};

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

useEffect(() => {
  if (!fileAktif) return;

const triggerPeringatan = async () => {

  if (halamanSudahAktif.current) return;

  halamanSudahAktif.current = true;

  let jumlahPelanggaran = 0;

  // tambah pelanggaran
  if (soalAktif) {
    jumlahPelanggaran =
      (pelanggaran[soalAktif] || 0) + 1;

    tambahPelanggaran(soalAktif);
  }

  // getar
  if ("vibrate" in navigator) {
    navigator.vibrate([500,200,500]);
  }

  // hentikan suara sebelumnya
  window.speechSynthesis.cancel();

  let pesanSuara = "";

  // pelanggaran pertama
  if (jumlahPelanggaran === 1) {
    pesanSuara =
      "Peringatan. Anda telah keluar dari halaman ujian. Jika pelanggaran terjadi dua kali, akses soal akan dikunci.";
  }

  // pelanggaran kedua
  else if (jumlahPelanggaran >= 2) {
    pesanSuara =
      "Perhatian. Anda telah keluar dari halaman ujian dua kali. Akses soal telah dikunci.";
  }

  const speech = new SpeechSynthesisUtterance(
    pesanSuara
  );

  speech.lang = "id-ID";
  speech.rate = 0.9;
  speech.pitch = 1;
  speech.volume = 1;

  window.speechSynthesis.speak(speech);

  await Swal.fire({
    icon: "warning",
    title: "Peringatan!",
    text: "Anda terdeteksi keluar dari mode ujian.",
    confirmButtonColor:"#dc2626",
    allowOutsideClick:false
  });

  setTimeout(() => {
    halamanSudahAktif.current = false;
  },1000);

};

  const tambahPelanggaran = (namaSoal) => {
  setPelanggaran((prev) => {

    const jumlah = (prev[namaSoal] || 0) + 1;

    // jika sudah 2x langsung kunci
    if (jumlah >= 2) {
      setSoalTerkunci((lock) => ({
        ...lock,
        [namaSoal]: true
      }));

      Swal.fire({
        icon: "error",
        title: "Akses Diblokir",
        text: "Anda telah keluar dari mode ujian 2 kali. Soal dikunci.",
        allowOutsideClick: false
      });

      sessionStorage.removeItem(
        "peringatan5menit"
      );

      setFileAktif(null);
      setSoalAktif(null);

      if (document.fullscreenElement) {
        document.exitFullscreen();
      }
    }

    return {
      ...prev,
      [namaSoal]: jumlah
    };
  });
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

    // kalau soal sudah ditutup jangan warning
    if (!fileAktif) return;

    if (!document.fullscreenElement) {

      triggerPeringatan();

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

}, [fileAktif, soalAktif, pelanggaran]);

useEffect(() => {
  const data = localStorage.getItem("soalTerkunci");

  if (data) {
    setSoalTerkunci(JSON.parse(data));
  }
}, []);

useEffect(() => {
  localStorage.setItem(
    "soalTerkunci",
    JSON.stringify(soalTerkunci)
  );
}, [soalTerkunci]);

// tambah bagian ini
useEffect(() => {
  const data = localStorage.getItem("pelanggaran");

  if (data) {
    setPelanggaran(JSON.parse(data));
  }
}, []);

useEffect(() => {
  localStorage.setItem(
    "pelanggaran",
    JSON.stringify(pelanggaran)
  );
}, [pelanggaran]);

useEffect(() => {

  if (!fileAktif || !soalAktif) return;

  const cekWaktu = setInterval(() => {

    const sekarang = new Date();

    // cari soal aktif dari jadwal
    let dataSoal = null;

    Object.values(jadwalUjian).forEach((kelas) => {
      kelas.forEach((hari) => {
        hari.mapel.forEach((mapel) => {

          if (mapel.file === soalAktif) {
            dataSoal = mapel;
          }

        });
      });
    });

    if (!dataSoal) return;

    const waktuSelesai = new Date(
      dataSoal.selesai
    );

    // jika waktu habis
    if (sekarang > waktuSelesai) {
      clearInterval(cekWaktu);

      // kunci soal
      setSoalTerkunci((prev) => ({
        ...prev,
        [soalAktif]: true
      }));

      // tutup soal
      setFileAktif(null);
      setSoalAktif(null);

      // keluar fullscreen
      if (document.fullscreenElement) {
        document.exitFullscreen();
      }

      suaraSelesai();

      Swal.fire({
        icon: "info",
        title: "Waktu Habis",
        text: "Waktu ujian telah selesai.",
        confirmButtonColor: "#16a34a",
        allowOutsideClick: false
      });

    }

  }, 30000);

  return () => clearInterval(cekWaktu);

}, [fileAktif, soalAktif]);

useEffect(() => {
  if (!fileAktif || !soalAktif) {
    setSisaWaktu("");
    return;
  }

  const interval = setInterval(() => {

    let dataSoal = null;

    Object.values(jadwalUjian).forEach((kelas) => {
      kelas.forEach((hari) => {
        hari.mapel.forEach((mapel) => {

          if (mapel.file === soalAktif) {
            dataSoal = mapel;
          }

        });
      });
    });

    if (!dataSoal) return;

    const selesai = new Date(dataSoal.selesai);
    const sekarang = new Date();

    const selisih =
      selesai.getTime() - sekarang.getTime();

    // peringatan 5 menit
    if (
      selisih <= 300000 &&
      selisih > 0 &&
      !sessionStorage.getItem("peringatan5menit")
    ) {

      sessionStorage.setItem(
        "peringatan5menit",
        "true"
      );

      Swal.fire({
        icon: "warning",
        title: "Perhatian",
        text: "Waktu ujian tersisa 5 menit lagi.",
        confirmButtonColor: "#dc2626"
      });

    }

    if (selisih <= 0) {
      setSisaWaktu("00:00:00");
      return;
    }

    const jam = Math.floor(
      selisih / (1000 * 60 * 60)
    );

    const menit = Math.floor(
      (selisih % (1000 * 60 * 60)) /
      (1000 * 60)
    );

    const detik = Math.floor(
      (selisih % (1000 * 60)) /
      1000
    );

    setSisaWaktu(
      `${String(jam).padStart(2,"0")}:${String(menit).padStart(2,"0")}:${String(detik).padStart(2,"0")}`
    );

  }, 1000);

  return () => clearInterval(interval);

}, [fileAktif, soalAktif]);

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
          transition-all duration-300 shadow-lg cursor-pointer

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

              {status==="Tersedia" && !soalTerkunci[item.file] ? (

              <button
                onClick={async () => {

                  let fileSoal = item.file;

                  // khusus Matematika kelas X
                    if (
                      kelasAktif === "X" &&
                      item.nama.toLowerCase().includes("matematika")
                    ) {

                    const result = await Swal.fire({
                      title: "Pilih Kelas",
                      text: "Pilih kelas Anda",
                      input: "select",
                      inputOptions: {
                        A: "Kelas A",
                        B: "Kelas B",
                        C: "Kelas C",
                        D: "Kelas D"
                      },
                      inputPlaceholder: "Pilih kelas",
                      showCancelButton: true,
                      confirmButtonText: "Lanjut",
                      cancelButtonText: "Batal",
                      confirmButtonColor: "#16a34a",
                      cancelButtonColor: "#dc2626",
                      reverseButtons: true,
                      allowOutsideClick: false
                    });

                    if (!result.isConfirmed) return;

                    const kelas = result.value;

                    // A dan B
                    if (
                      kelas === "A" ||
                      kelas === "B"
                    ) {
                      fileSoal = "/soal/matematika_ab.pdf";
                    }

                    // C dan D
                    else {
                      fileSoal = "/soal/matematika_cd.pdf";
                    }

                  }

                  setSoalAktif(item.file); // simpan soal asli
                  setFileAktif(fileSoal);  // simpan PDF yang dibuka

                  if (!document.fullscreenElement) {
                    try {
                      await document.documentElement.requestFullscreen();
                    } catch (err) {
                      console.log(
                        "Fullscreen gagal:",
                        err
                      );
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
                transition cursor-pointer
                "
              >
                <FileText size={18}/>
                Mulai Ujian
              </button>

              ) : soalTerkunci[item.file] ? (

              <button
                disabled
                className="
                mt-6 w-full flex items-center
                justify-center gap-2
                bg-red-200 text-red-700
                py-3 rounded-xl
                cursor-not-allowed
                "
              >
                <Lock size={18}/>
                Ujian Selesai
              </button>

              ) : (

              <button
                disabled
                className="
                mt-6 w-full flex items-center
                justify-center gap-2
                bg-gray-200 text-gray-500
                py-3 rounded-xl
                cursor-not-allowed
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
          bg-gradient-to-r
          from-green-50
          to-white
          sticky top-0 z-50
        ">

        <div>
          <h2 className="font-bold text-xl text-gray-800">
            Soal Ujian
          </h2>

          <p className="text-sm text-gray-500">
            SMK Gema Bhakti 1 Jasinga
          </p>

          <p
            className={`
            font-bold text-lg mt-1 animate-pulse
            ${
              sisaWaktu.startsWith("00:0")
              ? "text-red-600"
              : "text-green-600"
            }
            `}
          >
            ⏳ {sisaWaktu}
          </p>
        </div>

          <button
            onClick={async () => {

            const result = await Swal.fire({
              icon: "warning",
              title: "Keluar Ujian?",
              text: "Jika Anda keluar, soal ujian akan dianggap selesai.",
              showCancelButton: true,

              // hijau = keluar
              confirmButtonText: "Keluar",

              // merah = batal
              cancelButtonText: "Batal",

              confirmButtonColor: "#16a34a",
              cancelButtonColor: "#dc2626",

              reverseButtons: true,

              allowOutsideClick: false,
              allowEscapeKey: false
            });

            if (result.isConfirmed) {

              suaraSelesai();

              // kunci soal
            setSoalTerkunci((prev) => ({
              ...prev,
              [soalAktif]: true
            }));

              // tutup soal
              setFileAktif(null);
              setSoalAktif(null);

              if (document.fullscreenElement) {
                document.exitFullscreen();
              }

              Swal.fire({
                icon: "success",
                title: "Ujian Selesai",
                text: "Anda telah keluar. Soal ujian telah selesai.",
                confirmButtonColor: "#16a34a"
              });
            }

            }}
          >

            <X size={20} className="text-red-500 hover:text-red-600"/>

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