"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function EditMateriGuru() {
  const { id } = useParams();
  const router = useRouter();

  const [form, setForm] = useState({
    judul: "",
    mapel: "",
    kelas: "",
    deskripsi: "",
    status: "Draft",
  });

  // simulasi ambil data berdasarkan ID
  useEffect(() => {
    // nanti ganti ke API
    const dummyData = {
      1: {
        judul: "Pengenalan Algoritma",
        mapel: "KKPI",
        kelas: "X RPL",
        deskripsi: "Materi dasar algoritma dan flowchart",
        status: "Aktif",
      },
      2: {
        judul: "Struktur Data Dasar",
        mapel: "KKPI",
        kelas: "XI RPL",
        deskripsi: "Array, stack, queue",
        status: "Draft",
      },
    };

    if (dummyData[id]) {
      setForm(dummyData[id]);
    }
  }, [id]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Data hasil edit:", form);

    alert("Materi berhasil diperbarui");
    router.push("/e-learning/guru/materi");
  };

  return (
    <div className="bg-white rounded-2xl shadow p-6 max-w-3xl text-gray-700 mt-8">
      <h2 className="text-lg font-semibold mb-6">Edit Materi</h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Judul */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Judul Materi
          </label>
          <input
            type="text"
            name="judul"
            value={form.judul}
            onChange={handleChange}
            className="w-full border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />
        </div>

        {/* Mapel & Kelas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Mata Pelajaran
            </label>
            <input
              type="text"
              name="mapel"
              value={form.mapel}
              onChange={handleChange}
              className="w-full border rounded-xl px-4 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Kelas
            </label>
            <input
              type="text"
              name="kelas"
              value={form.kelas}
              onChange={handleChange}
              className="w-full border rounded-xl px-4 py-2"
            />
          </div>
        </div>

        {/* Deskripsi */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Deskripsi Materi
          </label>
          <textarea
            name="deskripsi"
            value={form.deskripsi}
            onChange={handleChange}
            rows={4}
            className="w-full border rounded-xl px-4 py-2"
          />
        </div>

        {/* Status */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Status
          </label>
          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            className="w-full border rounded-xl px-4 py-2"
          >
            <option value="Draft">Draft</option>
            <option value="Aktif">Aktif</option>
          </select>
        </div>

        {/* Action */}
        <div className="flex justify-end gap-3 pt-4">
          <button
            type="button"
            onClick={() => router.back()}
            className="px-5 py-2 rounded-xl border text-gray-600 hover:bg-gray-50"
          >
            Batal
          </button>
          <button
            type="submit"
            className="px-5 py-2 rounded-xl bg-green-500 text-white font-semibold hover:bg-green-600"
          >
            Simpan Perubahan
          </button>
        </div>
      </form>
    </div>
  );
}
