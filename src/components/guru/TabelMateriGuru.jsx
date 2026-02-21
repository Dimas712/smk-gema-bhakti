"use client";

import { useState } from "react";
import Link from "next/link";
import { Pencil, Trash2, FileText } from "lucide-react";
import { useRouter } from "next/navigation";

export default function TabelMateriGuru() {
  const router = useRouter();

  const [materi, setMateri] = useState([
    {
      id: 1,
      judul: "Pengenalan Algoritma",
      mapel: "KKPI",
      kelas: "X RPL",
      status: "Aktif",
    },
    {
      id: 2,
      judul: "Struktur Data Dasar",
      mapel: "KKPI",
      kelas: "XI RPL",
      status: "Draft",
    },
  ]);

  const handleEdit = (id) => {
    router.push(`/e-learning/guru/materi/edit/${id}`);
  };

  const handleHapus = (id) => {
    const confirmHapus = confirm("Yakin ingin menghapus materi ini?");
    if (!confirmHapus) return;

    setMateri((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-gray-800">Daftar Materi</h3>

        <Link
          href="/e-learning/guru/materi/tambah"
          className="bg-green-500 text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-green-600 transition"
        >
          + Tambah Materi
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-gray-500 border-b">
              <th className="py-3">Judul</th>
              <th>Mapel</th>
              <th>Kelas</th>
              <th>Status</th>
              <th className="text-center">Aksi</th>
            </tr>
          </thead>

          <tbody className="divide-y text-gray-500">
            {materi.map((item) => (
              <tr key={item.id}>
                <td className="py-3 flex items-center gap-2">
                  <FileText size={16} />
                  {item.judul}
                </td>
                <td>{item.mapel}</td>
                <td>{item.kelas}</td>
                <td>
                  <span
                    className={`px-3 py-1 rounded-full text-xs
                      ${
                        item.status === "Aktif"
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-100 text-gray-600"
                      }
                    `}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="text-center">
                  <div className="flex justify-center gap-2">
                    <button
                      onClick={() => handleEdit(item.id)}
                      className="p-2 rounded-lg bg-blue-100 text-blue-600 hover:bg-blue-200"
                    >
                      <Pencil size={16} />
                    </button>
                    <button
                      onClick={() => handleHapus(item.id)}
                      className="p-2 rounded-lg bg-red-100 text-red-600 hover:bg-red-200"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}

            {materi.length === 0 && (
              <tr>
                <td colSpan="5" className="py-6 text-center text-gray-400">
                  Belum ada materi
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
