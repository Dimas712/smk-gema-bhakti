"use client";

import { useState,useEffect } from "react";
import { Plus, Trash2, Pencil } from "lucide-react";
import TambahAdminModal from "@/components/ppdb/admin/TambahAdminModal";
import api from "@/lib/api";

export default function ManajemenAdminPage() {
  const [showForm, setShowForm] = useState(false);
  const [admins, setAdmins] = useState([]);
  const [selectedAdmin, setSelectedAdmin] = useState(null);

  const fetchAdmins = async () => {
    try {
      const res = await api.get("/users");
      setAdmins(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchAdmins();
  }, []);

  const handleDelete = async (id) => {
    if (!confirm("Yakin hapus admin?")) return;

    try {
      await api.delete(`/users/${id}`);
      fetchAdmins();
    } catch (err) {
      console.error(err);
    }
  };

  const handleEdit = (admin) => {
    setSelectedAdmin(admin);
    setShowForm(true);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Manajemen Admin
          </h1>
          <p className="text-gray-500 text-sm">
            Kelola akun admin PPDB
          </p>
        </div>

        <button
          onClick={() => {
            setSelectedAdmin(null);
            setShowForm(true);
          }}
          className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-xl cursor-pointer"
        >
          <Plus size={18} />
          Tambah Admin
        </button>
      </div>

      {/* Tabel Admin */}
      <div className="bg-white rounded-2xl shadow overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b text-gray-500">
              <th className="px-4 py-3 text-left">Nama</th>
              <th className="px-4 py-3 text-left">Email</th>
              <th className="px-4 py-3 text-left">Role</th>
              <th className="px-4 py-3 text-left">Status</th>
              <th className="px-4 py-3 text-left">Aksi</th>
            </tr>
          </thead>

          <tbody>
            {admins.map((admin) => (
              <tr
                key={admin.id_user}
                className="border-b hover:bg-gray-50"
              >
                <td className="px-4 py-3 font-medium text-gray-700">
                  {admin.nama}
                </td>
                <td className="px-4 py-3 text-gray-700">{admin.email}</td>
                <td className="px-4 py-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs
                      ${admin.role === "super_admin"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-gray-100 text-gray-700"
                      }`}
                  >
                    {admin.role === "super_admin" ? "Super Admin" : "Admin"}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span className="px-3 py-1 rounded-full text-xs bg-green-700 text-green-700">
                    {admin.status}
                  </span>
                </td>
                <td className="px-4 py-3 space-x-2">
                  <button 
                    onClick={() => handleEdit(admin)}
                    className="inline-flex items-center gap-1 px-3 py-1 text-xs rounded-lg bg-yellow-500 text-white hover:bg-yellow-600 cursor-pointer"
                  >
                    <Pencil size={14} />
                    Edit
                  </button>
                  <button 
                      onClick={() => handleDelete(admin.id_user)}
                      className="inline-flex items-center gap-1 px-3 py-1 text-xs rounded-lg bg-red-600 text-white hover:bg-red-700 cursor-pointer">
                    <Trash2 size={14} />
                    Hapus
                  </button>
                </td>
              </tr>
            ))}

            {admins.length === 0 && (
              <tr>
                <td
                  colSpan="5"
                  className="text-center py-6 text-gray-500"
                >
                  Belum ada data admin
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {showForm && (
        <TambahAdminModal 
          admin={selectedAdmin}
          onClose={() => setShowForm(false)} 
          onSuccess={fetchAdmins}
        /> 
      )}
    </div>
  );
}
