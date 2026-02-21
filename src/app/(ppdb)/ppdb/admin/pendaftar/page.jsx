"use client";

import DetailPendaftarModal from "@/components/ppdb/admin/DetailPendaftarModal";
import TambahPendaftarModal from "@/components/ppdb/admin/TambahPendaftarModal";
import EditPendaftarModal from "@/components/ppdb/admin/EditPendaftarModal";
import { Eye, CheckCircle, XCircle, Search, Plus, Pencil } from "lucide-react";
import { useState,useEffect } from "react";
import {
  getAllPendaftar,
  createPendaftar,
  updatePendaftar,
  deletePendaftar,
  verifikasiPendaftar
} from "@/lib/pendaftar";

export default function PendaftarPage() {
  const [search, setSearch] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [selected, setSelected] = useState(null);
  const [openTambah, setOpenTambah] = useState(false);
  const [data, setData] = useState([]);
  const [openEdit, setOpenEdit] = useState(false);
  const [selectedPendaftar, setSelectedPendaftar] = useState(null);
  // Dummy data (nanti ganti dari API)

  const filteredData = data.filter((item) =>
    item.nama.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await getAllPendaftar();
      setData(res);
    } catch (error) {
      console.error(error);
    }
  };

const formatStatus = (status) => {
  if (status === "terverifikasi") return "Terverifikasi";
  if (status === "ditolak") return "Ditolak";
  return "Menunggu";
};

const statusStyle = (status) => {
  switch (status) {
    case "terverifikasi":
      return "bg-green-100 text-green-700";
    case "ditolak":
      return "bg-red-100 text-red-700";
    default:
      return "bg-yellow-100 text-yellow-700";
  }
};

const handleTambah = async (form) => {
  try {
    await createPendaftar(form);
    fetchData();
    setOpenTambah(false);
  } catch (error) {
    console.error(error);
  }
};

const handleUpdate = async (updatedForm) => {
  try {
    await updatePendaftar(selectedPendaftar.id_pendaftar, updatedForm);
    fetchData();
    setOpenEdit(false);
  } catch (error) {
    console.error(error);
  }
};

const handleDelete = async (id) => {
  if (!confirm("Yakin hapus?")) return;

  try {
    await deletePendaftar(id);
    fetchData();
  } catch (error) {
    console.error(error);
  }
};

const handleVerifikasi = async (id, status) => {
  try {
    await verifikasiPendaftar(id, status);
    fetchData();
  } catch (error) {
    console.error(error);
  }
};

  return (
    <div className="space-y-6">

      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">
          Data Pendaftar PPDB
        </h1>
        <p className="text-gray-500 text-sm">
          Daftar calon peserta didik yang mendaftar PPDB
        </p>
      </div>

      <button
        onClick={() => setOpenTambah(true)}
        className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 cursor-pointer"
        >
        <Plus size={18} />
        Tambah Pendaftar
       </button>

      {/* Search */}
      <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow">
        <Search size={20} className="text-gray-400" />
        <input
          type="text"
          placeholder="Cari nama pendaftar..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full outline-none text-sm text-gray-500"
        />
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-6 py-4 text-left">No</th>
              <th className="px-6 py-4 text-left">Nama</th>
              <th className="px-6 py-4 text-left">NISN</th>
              <th className="px-6 py-4 text-left">Sekolah Asal</th>
              <th className="px-6 py-4 text-left">Status</th>
              <th className="px-6 py-4 text-center">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr
                key={item.id_pendaftar}
                className="border-t hover:bg-gray-50 transition text-gray-700"
              >
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4 font-medium">
                  {item.nama}
                </td>
                <td className="px-6 py-4">{item.nisn}</td>
                <td className="px-6 py-4">{item.sekolah_asal}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${statusStyle(
                      item.status
                    )}`}
                  >
                    {formatStatus(item.status)}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex justify-center gap-2">
                    
                    <button
                    onClick={() => {
                        setSelected(item);
                        setOpenModal(true);
                    }}
                    className="p-2 rounded-lg hover:bg-gray-100 cursor-pointer"
                    >
                      <Eye size={18} />
                    </button>
                    <button
                      onClick={() => handleVerifikasi(item.id_pendaftar, "terverifikasi")}
                      className="p-2 rounded-lg hover:bg-green-100 text-green-600 cursor-pointer"
                    >
                      <CheckCircle size={18} />
                    </button>

                    <button
                      onClick={() => {
                        setSelectedPendaftar(item);
                        setOpenEdit(true);
                      }}
                      className="p-2 rounded-lg hover:bg-yellow-100 text-yellow-600 cursor-pointer"
                      title="Edit Data"
                    >
                      <Pencil size={18} />
                    </button>

                  <button
                    onClick={() => handleDelete(item.id_pendaftar)}
                    className="p-2 rounded-lg hover:bg-red-100 text-red-600 cursor-pointer"
                  >
                    <XCircle size={18} />
                  </button>

                  </div>
                </td>
              </tr>
            ))}

            {filteredData.length === 0 && (
              <tr>
                <td
                  colSpan={7}
                  className="px-6 py-10 text-center text-gray-500"
                >
                  Data tidak ditemukan
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <DetailPendaftarModal
            open={openModal}
            onClose={() => setOpenModal(false)}
            data={selected}
        />
        <TambahPendaftarModal
            open={openTambah}
            onClose={() => setOpenTambah(false)}
            onSubmit={handleTambah}
        />
        <EditPendaftarModal
          open={openEdit}
          onClose={() => setOpenEdit(false)}
          data={selectedPendaftar}
          onSubmit={handleUpdate}
        />

      </div>
    </div>
  );
}
