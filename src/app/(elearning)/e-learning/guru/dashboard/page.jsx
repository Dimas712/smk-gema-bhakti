"use client";

import {
  BookOpen,
  Users,
  ClipboardList,
  FileText,
} from "lucide-react";

export default function DashboardGuru() {
  const stats = [
    {
      title: "Kelas Diampu",
      value: 3,
      icon: <Users className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "Total Siswa",
      value: 96,
      icon: <Users className="w-8 h-8 text-green-600" />,
    },
    {
      title: "Materi",
      value: 24,
      icon: <BookOpen className="w-8 h-8 text-purple-600" />,
    },
    {
      title: "Tugas Aktif",
      value: 5,
      icon: <ClipboardList className="w-8 h-8 text-orange-600" />,
    },
  ];

  const tugasBelumDinilai = [
    {
      kelas: "X RPL 1",
      tugas: "Algoritma Dasar",
      jumlah: 10,
    },
    {
      kelas: "XI RPL 2",
      tugas: "Database MySQL",
      jumlah: 7,
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="mt-20">
        <h1 className="text-2xl font-bold text-gray-800">
          Dashboard Guru
        </h1>
        <p className="text-gray-500">
          Ringkasan aktivitas mengajar hari ini
        </p>
      </div>

      {/* Statistik */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm p-6 flex items-center justify-between"
          >
            <div>
              <p className="text-sm text-gray-500">{item.title}</p>
              <h2 className="text-3xl font-bold text-gray-800">
                {item.value}
              </h2>
            </div>
            {item.icon}
          </div>
        ))}
      </div>

      {/* Tabel */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Tugas Belum Dinilai
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 text-gray-600 text-sm">
                <th className="px-4 py-3 text-left">Kelas</th>
                <th className="px-4 py-3 text-left">Nama Tugas</th>
                <th className="px-4 py-3 text-center">Jumlah</th>
                <th className="px-4 py-3 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {tugasBelumDinilai.map((item, index) => (
                <tr
                  key={index}
                  className="border-t text-gray-700"
                >
                  <td className="px-4 py-3">{item.kelas}</td>
                  <td className="px-4 py-3">{item.tugas}</td>
                  <td className="px-4 py-3 text-center">
                    {item.jumlah}
                  </td>
                  <td className="px-4 py-3 text-center">
                    <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                      Nilai
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {tugasBelumDinilai.length === 0 && (
            <p className="text-center text-gray-500 py-6">
              Tidak ada tugas yang perlu dinilai 🎉
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
