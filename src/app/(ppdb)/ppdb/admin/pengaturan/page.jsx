"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import api from "@/lib/api";
import { getProfile, updateProfile } from "@/lib/user";

export default function Pengaturan() {
  const router = useRouter();

  const [form, setForm] = useState({
    nama: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    fetchAdmin();
  }, []);

  const fetchAdmin = async () => {
    try {
      const data = await getProfile(api);

      setForm((prev) => ({
        ...prev,
        nama: data.nama,
        email: data.email,
      }));
    } catch (err) {
      console.error(err);

      if (err.response?.status === 401) {
        localStorage.removeItem("adminToken");
        router.push("/ppdb/auth/login/admin");
      }
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateProfile(api, form);
      alert("Profil berhasil diperbarui");

      setForm((prev) => ({
        ...prev,
        password: "",
      }));
    } catch (err) {
      alert("Gagal update profil");
      console.error(err);
    }
  };

  return (
    <div className="py-8 px-4">
      <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-5">

        {/* PROFILE CARD */}
        <div className="bg-white rounded-xl shadow-md p-5 text-center border">
          <div className="flex justify-center mb-3">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="profile"
              className="w-20 h-20 rounded-full shadow"
            />
          </div>

          <h2 className="text-base font-semibold text-gray-800">
            {form.nama || "Nama Admin"}
          </h2>

          <p className="text-gray-500 text-xs mt-1">
            {form.email || "email@email.com"}
          </p>

          <span className="inline-block mt-3 px-3 py-1 text-xs bg-green-100 text-green-700 rounded-full">
            Admin PPDB
          </span>
        </div>

        {/* FORM */}
        <div className="md:col-span-2 bg-white rounded-xl shadow-md p-6 border">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Pengaturan Akun
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">

            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">
                Nama Lengkap
              </label>
              <input
                type="text"
                name="nama"
                value={form.nama}
                onChange={handleChange}
                className="w-full px-3 py-2 text-sm border rounded-md focus:ring-2 focus:ring-green-500 text-gray-800"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full px-3 py-2 text-sm border rounded-md focus:ring-2 focus:ring-green-500 text-gray-800"
              />
            </div>

            <div className="border-t pt-4">
              <h3 className="text-sm font-semibold text-gray-700 mb-3">
                Ganti Password
              </h3>

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password Baru"
                value={form.password}
                onChange={handleChange}
                className="w-full px-3 py-2 text-sm border rounded-md mb-3 focus:ring-2 focus:ring-green-500"
              />

              <div className="flex items-center mt-3">
                <input
                  type="checkbox"
                  onChange={() => setShowPassword(!showPassword)}
                  className="mr-2"
                />
                <span className="text-xs text-gray-600">
                  Tampilkan Password
                </span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-2 text-sm rounded-md font-semibold"
            >
              Simpan Perubahan
            </button>

          </form>
        </div>

      </div>
    </div>
  );
}