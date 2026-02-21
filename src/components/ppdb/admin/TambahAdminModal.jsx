"use client";

import { useState, useEffect } from "react";
import api from "@/lib/api";
import { Eye, EyeOff } from "lucide-react";

export default function TambahAdminModal({ onClose, onSuccess, admin }) {
  const isEdit = !!admin;

  const [form, setForm] = useState({
    nama: "",
    email: "",
    password: "",
    role: "admin",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (admin) {
      setForm({
        nama: admin.nama || "",
        email: admin.email || "",
        password: "",
        role: admin.role || "admin",
      });
    }
  }, [admin]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isEdit) {
        await api.put(`/users/${admin.id_user}`, form);
        alert("Admin berhasil diupdate");
      } else {
        await api.post("/users", form);
        alert("Admin berhasil ditambahkan");
      }

      onSuccess();
      onClose();
    } catch (error) {
      console.error(error);
      alert("Gagal menyimpan admin");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-md rounded-2xl p-6 shadow">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          {isEdit ? "Edit Admin" : "Tambah Admin"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          
          <div>
            <label className="text-sm text-gray-600">
              Nama Lengkap
            </label>
            <input
              type="text"
              name="nama"
              value={form.nama}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-700"
              placeholder="Nama admin"
              required
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-700"
              placeholder="email@sekolah.sch.id"
              required
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">
              Password
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={form.password}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-700 pr-10"
                placeholder={isEdit ? "Kosongkan jika tidak ingin diubah" : ""}
                required={!isEdit}
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-500 hover:text-gray-700 cursor-pointer"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <div>
            <label className="text-sm text-gray-600">
              Role
            </label>
            <select
              name="role"
              value={form.role}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border rounded-xl text-gray-700"
            >
              <option value="admin">Admin</option>
              <option value="super_admin">Super Admin</option>
            </select>
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-gray-200 hover:bg-gray-300 text-gray-700 cursor-pointer"
            >
              Batal
            </button>

            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 rounded-xl bg-green-600 text-white hover:bg-green-700 cursor-pointer"
            >
              {isEdit ? "Update" : "Simpan"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}