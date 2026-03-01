"use client";

import { X } from "lucide-react";

export default function DetailPendaftarModal({ open, onClose, data }) {
  if (!open || !data) return null;
  const getFile = (jenis) => {
  return data.berkas?.find(b => b.jenis_berkas === jenis)?.path;
};

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
              <Item label="No Pendaftaran" value={data.no_pendaftaran}/>
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
              <FileItem label="Kartu Keluarga" file={getFile("kk")} />
              <FileItem label="Akta Kelahiran" file={getFile("akta")} />
              <FileItem label="Ijazah / SKL" file={getFile("ijazah")} />
              <FileItem label="Rapor" file={getFile("rapor")} />
              <FileItem label="Pas Foto" file={getFile("foto")} />
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
  if (!file) {
    return (
      <div>
        <p className="text-gray-500 text-xs mb-1">{label}</p>
        <p className="text-gray-400">Belum diunggah</p>
      </div>
    );
  }

  const url = `${process.env.NEXT_PUBLIC_API_URL}/${file}`;
  const isImage = file.match(/\.(jpg|jpeg|png|webp)$/i);
  const isPDF = file.match(/\.pdf$/i);

  return (
    <div>
      <p className="text-gray-500 text-xs mb-2">{label}</p>

      {/* Preview Gambar */}
      {isImage && (
        <img
          src={url}
          alt={label}
          className="w-32 h-40 object-cover rounded-lg border cursor-pointer hover:scale-105 transition"
          onClick={() => window.open(url, "_blank")}
        />
      )}

      {/* Link PDF */}
      {isPDF && (
        <a
          href={url}
          target="_blank"
          className="text-green-600 font-medium hover:underline"
        >
          Buka PDF
        </a>
      )}

      {/* Fallback selain gambar/pdf */}
      {!isImage && !isPDF && (
        <a
          href={url}
          target="_blank"
          className="text-green-600 font-medium hover:underline"
        >
          Lihat File
        </a>
      )}
    </div>
  );
}
