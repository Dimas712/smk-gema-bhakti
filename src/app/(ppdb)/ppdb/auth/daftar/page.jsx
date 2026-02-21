"use client";

import { useState } from "react";
import StepIndicator from "@/components/ppdb/formdaftar/StepIndicator";
import StepBiodata from "@/components/ppdb/formdaftar/StepBiodata";
import StepUpload from "@/components/ppdb/formdaftar/StepUpload";
import StepConfirm from "@/components/ppdb/formdaftar/StepConfirm";

export default function FormPPDBPage() {
  const [step, setStep] = useState(1);

  const [form, setForm] = useState({
    nama: "",
    nisn: "",
    nik: "",
    tempatLahir: "",
    tanggalLahir: "",
    jenisKelamin: "",
    sekolahAsal: "",
    namaAyah: "",
    namaIbu: "",
    noHp: "",
  });

  const [files, setFiles] = useState({
    kk: null,
    akta: null,
    ijazah: null,
    rapor: null,
    foto: null,
  });

  const handleSubmit = () => {
    console.log(form, files);
    alert("Pendaftaran berhasil (dummy)");
  };

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-14">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow p-8">

        <header className="text-center mb-10">
          <h1 className="text-3xl font-extrabold text-green-700">
            Formulir PPDB Online
          </h1>
          <p className="text-gray-500">SMK Gema Bhakti 1 Jasinga</p>
          <StepIndicator step={step} />
        </header>

        {step === 1 && (
          <StepBiodata
            form={form}
            setForm={setForm}
            next={() => setStep(2)}
          />
        )}

        {step === 2 && (
          <StepUpload
            files={files}
            setFiles={setFiles}
            prev={() => setStep(1)}
            next={() => setStep(3)}
          />
        )}

        {step === 3 && (
          <StepConfirm
            form={form}
            prev={() => setStep(2)}
            submit={handleSubmit}
          />
        )}

      </div>
    </main>
  );
}
