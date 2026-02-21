"use client";

import { X } from "lucide-react";

export default function DetailPendaftarModal({ open, onClose, data }) {
  if (!open || !data) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white w-full max-w-4xl rounded-2xl shadow-xl p-6 animate-scaleIn overflow-y-auto max-h-[90vh]">

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-800">
            Detail Pendaftar
          </h2>
          <button onClick={onClose}>
            <X size={22} />
          </button>
        </div>

        <div className="space-y-8 text-sm">

          {/* DATA PRIBADI */}
          <Section title="Data Pribadi">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Item label="Nama Lengkap" value={data.nama} />
              <Item label="NISN" value={data.nisn} />
              <Item label="NIK" value={data.nik} />
              <Item label="Tempat Lahir" value={data.tempat_lahir} />
              <Item label="Tanggal Lahir" value={data.tgl_lahir} />
              <Item label="Jenis Kelamin" value={data.jk} />
            </div>
          </Section>

          {/* SEKOLAH ASAL */}
          <Section title="Sekolah Asal">
            <Item label="Nama Sekolah Asal" value={data.sekolah_asal} />
          </Section>

          {/* ORANG TUA */}
          <Section title="Data Orang Tua">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Item label="Nama Ayah" value={data.nama_ayah} />
              <Item label="Nama Ibu" value={data.nama_ibu} />
              <Item label="No HP / WhatsApp" value={data.no_hp} />
            </div>
          </Section>

          {/* BERKAS */}
          <Section title="Berkas Pendaftaran">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FileItem label="Kartu Keluarga" file={data.kk} />
              <FileItem label="Akta Kelahiran" file={data.akta} />
              <FileItem label="Ijazah / SKL" file={data.ijazah} />
              <FileItem label="Rapor" file={data.rapor} />
              <FileItem label="Pas Foto" file={data.foto} />
            </div>
          </Section>

          {/* STATUS */}
          <Section title="Status Pendaftaran">
            <Item 
              label="Status" 
              value={
                data.status === "terverifikasi"
                  ? "Terverifikasi"
                  : data.status === "ditolak"
                  ? "Ditolak"
                  : "Menunggu"
              }
            />
          </Section>

        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 mt-8">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl border text-gray-700
                       hover:bg-gray-100 transition cursor-pointer"
          >
            Tutup
          </button>
        </div>

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

function Item({ label, value }) {
  return (
    <div>
      <p className="text-gray-500 text-xs mb-1">{label}</p>
      <p className="font-medium text-gray-800">
        {value || "-"}
      </p>
    </div>
  );
}

function FileItem({ label, file }) {
  return (
    <div>
      <p className="text-gray-500 text-xs mb-1">{label}</p>
      {file ? (
        <a
          href={file}
          target="_blank"
          className="text-green-600 font-medium hover:underline"
        >
          Lihat Berkas
        </a>
      ) : (
        <p className="text-gray-400">Belum diunggah</p>
      )}
    </div>
  );
}
