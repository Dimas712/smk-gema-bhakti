"use client";

import { useParams } from "next/navigation";
import { useState, useMemo } from "react";

const DATA = [
  { id: 1, judul: "Tes Esai" },
  { id: 2, judul: "PSAS Ganjil 2023" },
  { id: 3, judul: "Pilihan Ganda PSAJ" },
  { id: 4, judul: "Latihan Soal Bab 1" },
  { id: 5, judul: "Materi Video Pembelajaran" },
  { id: 6, judul: "Rangkuman Bab 2" },
  { id: 7, judul: "Evaluasi Tengah Semester" },
];

export default function Page() {
  const { slug } = useParams();
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const limit = 5;

  const mapelName = slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());

  const filteredData = useMemo(() => {
    return DATA.filter((item) =>
      item.judul.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const totalPages = Math.ceil(filteredData.length / limit);

  const paginatedData = useMemo(() => {
    const start = (page - 1) * limit;
    return filteredData.slice(start, start + limit);
  }, [filteredData, page]);

  return (
    <>
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-2 mt-16 text-gray-700">
        Dashboard <span className="mx-2">›</span>
        Materi <span className="mx-2">›</span>
      <span className="text-gray-700 font-medium">
        {mapelName}
       </span>
      </div>

          <h1 className="text-2xl font-bold text-gray-800">
            Materi {mapelName}
          </h1>

          <div className="bg-white rounded-xl shadow p-6 text-gray-700 mt-6">

            {/* Search + Show */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
              <input
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setPage(1);
                }}
                placeholder="Cari materi..."
                className="border rounded-lg px-4 py-2 text-sm w-full sm:w-64"
              />

              <p className="text-sm text-gray-500">
                Total: {filteredData.length} materi
              </p>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full border rounded-xl overflow-hidden">
                <thead className="bg-gray-100 text-sm">
                  <tr>
                    <th className="p-3 text-left w-20">No</th>
                    <th className="p-3 text-left">Judul Materi</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {paginatedData.length === 0 && (
                    <tr>
                      <td
                        colSpan={2}
                        className="p-4 text-center text-gray-500"
                      >
                        Materi tidak ditemukan
                      </td>
                    </tr>
                  )}

                  {paginatedData.map((item, i) => (
                    <tr
                      key={item.id}
                      className="border-t hover:bg-gray-50"
                    >
                      <td className="p-3">
                        {(page - 1) * limit + i + 1}
                      </td>
                      <td className="p-3 text-green-600 cursor-pointer hover:underline">
                        {item.judul}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-between mt-4 text-sm">
                <button
                  disabled={page === 1}
                  onClick={() => setPage((p) => p - 1)}
                  className="px-4 py-2 border rounded-lg disabled:opacity-50 cursor-pointer"
                >
                  Previous
                </button>

                <p>
                  Page {page} of {totalPages}
                </p>

                <button
                  disabled={page === totalPages}
                  onClick={() => setPage((p) => p + 1)}
                  className="px-4 py-2 border rounded-lg disabled:opacity-50 cursor-pointer"
                >
                  Next
                </button>
              </div>
            )}
          </div>
    </>
  );
}
