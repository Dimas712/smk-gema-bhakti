"use client";

import { X, Upload } from "lucide-react";
import { useState } from "react";

export default function ModalUploadBerkas({ open, onClose, pendaftar }) {
  const [jenisBerkas, setJenisBerkas] = useState("");
  const [file, setFile] = useState(null);
  const [valid, setValid] = useState(false);
  const [catatan, setCatatan] = useState("");

  if (!open) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("pendaftar_id", pendaftar.id);
    formData.append("jenis_berkas", jenisBerkas);
    formData.append("file", file);
    formData.append("status_verifikasi", valid ? "valid" : "menunggu");
    formData.append("catatan", catatan);

    // TODO: kirim ke backend
    console.log("UPLOAD ADMIN", Object.fromEntries(formData));

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-2xl w-full max-w-lg shadow-xl">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <h3 className="text-lg font-semibold">
            Upload Berkas – {pendaftar.nama}
          </h3>
          <button onClick={onClose}>
            <X />
          </button>
        </div>

        {/* Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="text-sm font-medium">Jenis Berkas</label>
            <select
              required
              value={jenisBerkas}
              onChange={(e) => setJenisBerkas(e.target.value)}
              className="w-full mt-1 px-4 py-2 border rounded-xl"
            >
              <option value="">Pilih berkas</option>
              <option value="kk">Kartu Keluarga</option>
              <option value="akta">Akta Kelahiran</option>
              <option value="rapor">Rapor</option>
              <option value="lainnya">Lainnya</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-medium">File</label>
            <input
              type="file"
              required
              onChange={(e) => setFile(e.target.files[0])}
              className="w-full mt-1"
            />
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={valid}
              onChange={(e) => setValid(e.target.checked)}
            />
            <span className="text-sm">Langsung tandai valid</span>
          </div>

          <div>
            <label className="text-sm font-medium">Catatan Admin</label>
            <textarea
              value={catatan}
              onChange={(e) => setCatatan(e.target.value)}
              className="w-full mt-1 px-4 py-2 border rounded-xl"
              placeholder="Opsional"
            />
          </div>

          {/* Footer */}
          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl border"
            >
              Batal
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl bg-green-600 text-white flex items-center gap-2"
            >
              <Upload size={18} />
              Upload
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
