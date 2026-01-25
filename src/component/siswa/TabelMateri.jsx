"use client";

import { useState } from "react";

export default function TabelMateri() {
  const data = [
    { id: 1, judul: "Tes Esai", mapel: "Bahasa Indonesia" },
    { id: 2, judul: "PTS 2023 Ganjil", mapel: "Bahasa Inggris" },
    { id: 3, judul: "PTS SMS1 2023", mapel: "Bahasa Inggris" },
    { id: 4, judul: "Seni Tari", mapel: "Seni Budaya" },
    { id: 5, judul: "Seni Musik", mapel: "Seni Budaya" },
    { id: 6, judul: "PSAS Ganjil 2023", mapel: "Bahasa Indonesia" },
    { id: 7, judul: "PSAS Ganjil 2023", mapel: "Bahasa Inggris" },
    { id: 8, judul: "PSAS Ganjil 2023", mapel: "Biologi" },
    { id: 9, judul: "PSAS Ganjil 2023", mapel: "Fisika" },
    { id: 10, judul: "PSAS Ganjil 2023", mapel: "Kimia" },
  ];

  const [search, setSearch] = useState("");

  const filteredData = data.filter(
    (item) =>
      item.judul.toLowerCase().includes(search.toLowerCase()) ||
      item.mapel.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white rounded-2xl shadow text-gray-700">
      {/* Header */}
      <div className="bg-sky-400 text-white px-6 py-3 rounded-t-2xl flex justify-between items-center">
        <h2 className="font-semibold">Data Materi</h2>
        <span className="text-xl">−</span>
      </div>

      {/* Control */}
      <div className="p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm">
        <div>
          Show{" "}
          <select className="border rounded px-2 py-1 mx-1">
            <option>10</option>
            <option>25</option>
            <option>50</option>
          </select>
          entries
        </div>

        <div>
          Search:{" "}
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border rounded px-3 py-1"
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-t">
          <thead className="bg-gray-50 text-gray-700">
            <tr>
              <th className="px-4 py-3 text-left w-12">No</th>
              <th className="px-4 py-3 text-left">Judul Materi</th>
              <th className="px-4 py-3 text-left">Mata Pelajaran</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr
                key={item.id}
                className="border-t hover:bg-gray-50 transition"
              >
                <td className="px-4 py-3">{index + 1}</td>
                <td className="px-4 py-3 text-lime-600 font-medium cursor-pointer hover:underline">
                  {item.judul}
                </td>
                <td className="px-4 py-3">{item.mapel}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="p-4 text-sm text-gray-500">
        Showing 1 to {filteredData.length} of {data.length} entries
      </div>
    </div>
  );
}
