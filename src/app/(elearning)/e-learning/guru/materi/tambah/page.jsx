"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function TambahMateriPage() {
  return (
    <>
      {/* HEADER */}
      <div className="bg-white rounded-2xl shadow p-6 flex items-center gap-4 text-gray-700 mt-16">
        <Link
          href="/e-learning/guru/materi"
          className="p-2 rounded-xl hover:bg-gray-100"
        >
          <ArrowLeft />
        </Link>

        <div>
          <h2 className="text-xl font-semibold text-gray-800">
            Tambah Materi
          </h2>
          <p className="text-sm text-gray-600">
            Buat materi pembelajaran baru
          </p>
        </div>
      </div>

      {/* FORM */}
      <div className="bg-white rounded-2xl shadow p-6">
        <form className="space-y-5 text-gray-700">

          {/* Judul */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Judul Materi
            </label>
            <input
              type="text"
              placeholder="Contoh: Pengenalan Algoritma"
              className="w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>

          {/* Mapel */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Mata Pelajaran
            </label>
            <select className="w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-green-500 focus:outline-none">
              <option>KKPI</option>
              <option>Bahasa Indonesia</option>
              <option>Bahasa Inggris</option>
            </select>
          </div>

          {/* Kelas */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Kelas
            </label>
            <select className="w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-green-500 focus:outline-none">
              <option>X RPL</option>
              <option>XI RPL</option>
              <option>XII RPL</option>
            </select>
          </div>

          {/* Jenis Materi */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Jenis Materi
            </label>
            <select className="w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-green-500 focus:outline-none">
              <option>File (PDF)</option>
              <option>Video</option>
              <option>Link</option>
            </select>
          </div>

          {/* Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Upload File / Link
            </label>
            <input
              type="file"
              className="w-full px-4 py-3 rounded-xl border bg-white"
            />
          </div>

          {/* Deskripsi */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Deskripsi
            </label>
            <textarea
              rows="4"
              placeholder="Deskripsi singkat materi..."
              className="w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>

          {/* STATUS */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Status Materi
            </label>
            <select className="w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-green-500 focus:outline-none">
              <option>Aktif</option>
              <option>Draft</option>
            </select>
          </div>

          {/* ACTION */}
          <div className="flex justify-end gap-3 pt-4">
            <Link
              href="/e-learning/guru/materi"
              className="px-6 py-3 rounded-xl border text-gray-700 hover:bg-gray-50"
            >
              Batal
            </Link>

            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-green-500 text-white font-semibold hover:bg-green-600 transition"
            >
              Simpan Materi
            </button>
          </div>

        </form>
      </div>
    </>
  );
}
