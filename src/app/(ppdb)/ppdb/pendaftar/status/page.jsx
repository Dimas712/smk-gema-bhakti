"use client";

import { CheckCircle, Clock, XCircle, FileText } from "lucide-react";

export default function StatusPage() {
  const statusData = {
    nama: "Dimas Alip",
    nisn: "1234567890",
    jurusan: "Rekayasa Perangkat Lunak",
    status: "Menunggu Verifikasi", // Diterima | Ditolak | Menunggu Verifikasi
  };

  const getStatusConfig = (status) => {
    switch (status) {
      case "Diterima":
        return {
          color: "text-green-600",
          bg: "bg-green-100",
          icon: CheckCircle,
          message: "Selamat! Kamu telah diterima.",
        };
      case "Ditolak":
        return {
          color: "text-red-600",
          bg: "bg-red-100",
          icon: XCircle,
          message: "Mohon maaf, pendaftaran kamu ditolak.",
        };
      default:
        return {
          color: "text-yellow-600",
          bg: "bg-yellow-100",
          icon: Clock,
          message: "Pendaftaran sedang diperiksa oleh admin.",
        };
    }
  };

  const config = getStatusConfig(statusData.status);
  const Icon = config.icon;

  return (
    <div className="p-6 pt-24 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Status Pendaftaran</h1>
          <p className="text-gray-500">Pantau status pendaftaran kamu di sini</p>
        </div>

        {/* Status Card */}
        <div className="bg-white rounded-2xl shadow-md p-8 text-center space-y-4">
          <div
            className={`mx-auto w-20 h-20 rounded-full flex items-center justify-center ${config.bg}`}
          >
            <Icon className={`w-10 h-10 ${config.color}`} />
          </div>

          <h2 className={`text-xl font-bold ${config.color}`}>
            {statusData.status}
          </h2>

          <p className="text-gray-500">{config.message}</p>
        </div>

        {/* Detail Card */}
        <div className="bg-white rounded-2xl shadow-md p-6 space-y-4">
          <h3 className="font-semibold text-gray-700 flex items-center gap-2">
            <FileText size={18} />
            Detail Pendaftar
          </h3>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-xl">
              <p className="text-sm text-gray-500">Nama</p>
              <p className="font-semibold text-gray-800">
                {statusData.nama}
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-xl">
              <p className="text-sm text-gray-500">NISN</p>
              <p className="font-semibold text-gray-800">
                {statusData.nisn}
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-xl">
              <p className="text-sm text-gray-500">Jurusan</p>
              <p className="font-semibold text-gray-800">
                {statusData.jurusan}
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-xl">
              <p className="text-sm text-gray-500">Status</p>
              <p className={`font-semibold ${config.color}`}>
                {statusData.status}
              </p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h3 className="font-semibold text-gray-700 mb-4">
            Progres Pendaftaran
          </h3>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              <p className="text-gray-700">Biodata diisi</p>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              <p className="text-gray-700">Berkas diupload</p>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
              <p className="text-gray-700">Verifikasi admin</p>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
              <p className="text-gray-400">Hasil seleksi</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
