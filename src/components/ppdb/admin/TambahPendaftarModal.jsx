"use client";

import { X } from "lucide-react";
import { useState } from "react";
import { createPendaftar } from "@/lib/pendaftar";

export default function TambahPendaftarModal({ open, onClose, onSubmit }) {
  const initialForm = {
    nama: "",
    nisn: "",
    nik: "",
    tempat_lahir: "",
    tgl_lahir: "",
    jk: "",
    sekolah_asal: "",
    nama_ayah: "",
    nama_ibu: "",
    no_hp: "",
    kk: null,
    akta: null,
    ijazah: null,
    rapor: null,
    foto: null,
  };

  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);

  if (!open) return null;

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleFile = (e) =>
    setForm({ ...form, [e.target.name]: e.target.files[0] });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();

      // DATA PRIBADI
      formData.append("nama", form.nama);
      formData.append("nisn", form.nisn);
      formData.append("nik", form.nik);
      formData.append("tempat_lahir", form.tempat_lahir);
      formData.append("tgl_lahir", form.tgl_lahir);

      formData.append(
        "jk",
        form.jk === "L" ? "Laki-laki" : "Perempuan"
      );

      // SEKOLAH
      formData.append("sekolah_asal", form.sekolah_asal);

      // ORTU
      formData.append("nama_ayah", form.nama_ayah);
      formData.append("nama_ibu", form.nama_ibu);
      formData.append("no_hp", form.no_hp);

      // FILE
      if (form.kk) formData.append("kk", form.kk);
      if (form.akta) formData.append("akta", form.akta);
      if (form.ijazah) formData.append("ijazah", form.ijazah);
      if (form.rapor) formData.append("rapor", form.rapor);
      if (form.foto) formData.append("foto", form.foto);

      // KIRIM KE API
      await createPendaftar(formData);

      // Reload data parent
      if (onSubmit) onSubmit();

      // Reset form
      setForm(initialForm);

      // Tutup modal
      onClose();

    } catch (error) {
      console.error("Error tambah pendaftar:", error);
      alert("Gagal menambahkan pendaftar");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center text-gray-800">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      <div className="relative bg-white w-full max-w-4xl rounded-2xl p-6 shadow-xl overflow-y-auto max-h-[90vh]">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Tambah Pendaftar</h2>
          <button onClick={onClose}>
            <X />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">

          {/* DATA PRIBADI */}
          <Section title="Data Pribadi">
            <div className="grid md:grid-cols-2 gap-4">
              <Input label="Nama Lengkap" name="nama" value={form.nama} onChange={handleChange} required />
              <Input label="NISN" name="nisn" value={form.nisn} onChange={handleChange} required />
              <Input label="NIK" name="nik" value={form.nik} onChange={handleChange} />
              <Input label="Tempat Lahir" name="tempat_lahir" value={form.tempat_lahir} onChange={handleChange} />
              <Input
                type="date"
                label="Tanggal Lahir"
                name="tgl_lahir"
                value={form.tgl_lahir}
                onChange={handleChange}
              />

              <Select
                label="Jenis Kelamin"
                name="jk"
                value={form.jk}
                onChange={handleChange}
                required
              >
                <option value="">-- Pilih --</option>
                <option value="Laki-laki">Laki-laki</option>
                <option value="Perempuan">Perempuan</option>
              </Select>
            </div>
          </Section>

          {/* SEKOLAH */}
          <Section title="Sekolah Asal">
            <Input
              label="Nama Sekolah Asal"
              name="sekolah_asal"
              value={form.sekolah_asal}
              onChange={handleChange}
            />
          </Section>

          {/* ORTU */}
          <Section title="Data Orang Tua">
            <div className="grid md:grid-cols-2 gap-4">
              <Input label="Nama Ayah" name="nama_ayah" value={form.nama_ayah} onChange={handleChange} />
              <Input label="Nama Ibu" name="nama_ibu" value={form.nama_ibu} onChange={handleChange} />
              <Input label="No HP" name="no_hp" value={form.no_hp} onChange={handleChange} />
            </div>
          </Section>

          {/* BERKAS */}
          <Section title="Upload Berkas">
            <div className="grid md:grid-cols-2 gap-4">
              <File label="Kartu Keluarga" name="kk" onChange={handleFile} />
              <File label="Akta Kelahiran" name="akta" onChange={handleFile} />
              <File label="Ijazah" name="ijazah" onChange={handleFile} />
              <File label="Rapor" name="rapor" onChange={handleFile} />
              <File label="Pas Foto" name="foto" onChange={handleFile} />
            </div>
          </Section>

          {/* ACTION */}
          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl border text-gray-700 hover:bg-gray-100"
            >
              Batal
            </button>

            <button
              type="submit"
              disabled={loading}
              className="px-5 py-2.5 rounded-xl bg-green-600 text-white hover:bg-green-700 shadow disabled:bg-gray-400"
            >
              {loading ? "Menyimpan..." : "Simpan"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

/* COMPONENT */
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
        className="w-full px-4 py-2.5 rounded-xl border focus:ring-2 focus:ring-green-500 outline-none"
      />
    </div>
  );
}

function Select({ label, children, ...props }) {
  return (
    <div className="space-y-1">
      <label className="text-sm text-gray-600">{label}</label>
      <select
        {...props}
        className="w-full px-4 py-2.5 rounded-xl border focus:ring-2 focus:ring-green-500 outline-none"
      >
        {children}
      </select>
    </div>
  );
}

function File({ label, ...props }) {
  return (
    <div className="space-y-1">
      <label className="text-sm text-gray-600">{label}</label>
      <input
        type="file"
        {...props}
        className="w-full px-4 py-2.5 rounded-xl border bg-white text-sm"
      />
    </div>
  );
}