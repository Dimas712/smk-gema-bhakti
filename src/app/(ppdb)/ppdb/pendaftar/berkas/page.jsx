"use client";

import { Upload, FileText, CheckCircle, Clock } from "lucide-react";

export default function BerkasPage() {
  const berkas = [
    { nama: "Kartu Keluarga", status: "uploaded" },
    { nama: "Akta Kelahiran", status: "pending" },
    { nama: "Ijazah", status: "uploaded" },
    { nama: "Pas Foto", status: "pending" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6 pt-24">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Berkas Pendaftaran</h1>
        <p className="text-gray-500 text-sm">
          Upload dan lengkapi berkas persyaratan pendaftaran
        </p>
      </div>

      {/* Grid Berkas */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {berkas.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-sm border p-5 hover:shadow-md transition"
          >
            {/* Icon */}
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-blue-50 rounded-xl">
                <FileText className="text-blue-600" size={24} />
              </div>

              {/* Status */}
              {item.status === "uploaded" ? (
                <span className="flex items-center gap-1 text-green-600 text-sm font-medium">
                  <CheckCircle size={16} />
                  Uploaded
                </span>
              ) : (
                <span className="flex items-center gap-1 text-yellow-600 text-sm font-medium">
                  <Clock size={16} />
                  Pending
                </span>
              )}
            </div>

            {/* Nama Berkas */}
            <h2 className="font-semibold text-gray-800 mb-2">
              {item.nama}
            </h2>

            <p className="text-sm text-gray-500 mb-4">
              Upload file dalam format PDF atau JPG
            </p>

            {/* Button */}
            <button className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl transition">
              <Upload size={18} />
              Upload Berkas
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
