"use client";

import { X } from "lucide-react";
import { useEffect, useState } from "react";

export default function EditPendaftarModal({
  open,
  onClose,
  data,
  onSubmit,
}) {
  const [form, setForm] = useState({});

  useEffect(() => {
    if (data) setForm(data);
  }, [data]);

  if (!open || !data) return null;

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      <div className="relative bg-white w-full max-w-4xl rounded-2xl p-6 shadow-xl animate-scaleIn overflow-y-auto max-h-[90vh]">

        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-800">
            Edit Data Pendaftar
          </h2>
          <button onClick={onClose}>
            <X />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">

          {/* DATA PRIBADI */}
          <Section title="Data Pribadi">
            <div className="grid md:grid-cols-2 gap-4">
              <Input label="Nama Lengkap" name="nama" value={form.nama || ""} onChange={handleChange} />
              <Input label="NISN" name="nisn" value={form.nisn || ""} onChange={handleChange} />
              <Input label="Tempat Lahir" name="tempatLahir" value={form.tempatLahir || ""} onChange={handleChange} />
              <Input type="date" label="Tanggal Lahir" name="tanggalLahir" value={form.tanggalLahir || ""} onChange={handleChange} />
            </div>
          </Section>

          {/* SEKOLAH */}
          <Section title="Sekolah Asal">
            <Input
              label="Nama Sekolah Asal"
              name="sekolahAsal"
              value={form.sekolahAsal || ""}
              onChange={handleChange}
            />
          </Section>

          {/* ORANG TUA */}
          <Section title="Data Orang Tua">
            <div className="grid md:grid-cols-2 gap-4">
              <Input label="Nama Ayah" name="namaAyah" value={form.namaAyah || ""} onChange={handleChange} />
              <Input label="Nama Ibu" name="namaIbu" value={form.namaIbu || ""} onChange={handleChange} />
              <Input label="No HP" name="noHp" value={form.noHp || ""} onChange={handleChange} />
            </div>
          </Section>

          {/* ACTION */}
          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl border hover:bg-gray-100"
            >
              Batal
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl bg-green-600 text-white hover:bg-green-700 shadow"
            >
              Simpan Perubahan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

/* ===== COMPONENT ===== */

function Section({ title, children }) {
  return (
    <div>
      <h3 className="font-semibold text-gray-700 mb-3">{title}</h3>
      {children}
    </div>
  );
}

function Input({ label, ...props }) {
  return (
    <div className="space-y-1">
      <label className="text-sm text-gray-600">{label}</label>
      <input
        {...props}
        className="w-full px-4 py-2.5 rounded-xl border
                   focus:ring-2 focus:ring-green-500 outline-none"
      />
    </div>
  );
}
