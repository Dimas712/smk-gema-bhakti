"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { User, Lock, ArrowRight } from "lucide-react";
import Swal from "sweetalert2";
import { loginPendaftar } from "@/lib/pendaftar";

export default function LoginPendaftarPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    no_pendaftaran: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await loginPendaftar(
        form.no_pendaftaran,
        form.password
      );

      // Simpan token
      localStorage.setItem("pendaftarToken", res.token);
      localStorage.setItem("pendaftarUser", JSON.stringify(res.user));

      await Swal.fire({
        icon: "success",
        title: "Login berhasil",
        timer: 1500,
        showConfirmButton: false,
      });

      router.push("/ppdb/pendaftar/dashboard");

    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Login gagal",
        text: err.response?.data?.message || "Terjadi kesalahan",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-green-100 p-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl overflow-hidden">

        {/* Header */}
        <div className="bg-green-700 p-8 text-center text-white">
          <Image
            src="/smk.jpg"
            alt="Logo"
            width={80}
            height={80}
            className="mx-auto rounded-full bg-white p-1 mb-4 shadow-lg"
          />
          <h1 className="text-2xl font-bold">Login Calon Siswa</h1>
          <p className="text-green-100 text-sm">
            Masuk untuk cek status pendaftaran
          </p>
        </div>

        {/* Form */}
        <div className="p-8">
          <form onSubmit={handleLogin} className="space-y-6">

            {/* No Pendaftaran */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nomor Pendaftaran
              </label>
              <div className="relative">
                <User
                  size={20}
                  className="absolute left-3 top-3 text-gray-400"
                />
                <input
                  type="text"
                  name="no_pendaftaran"
                  value={form.no_pendaftaran}
                  onChange={handleChange}
                  required
                  placeholder="Contoh: PPDB-2026-001"
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl
                  focus:ring-2 focus:ring-green-500 outline-none"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password (NISN)
              </label>
              <div className="relative">
                <Lock
                  size={20}
                  className="absolute left-3 top-3 text-gray-400"
                />
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  required
                  placeholder="Masukkan NISN"
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl
                  focus:ring-2 focus:ring-green-500 outline-none"
                />
              </div>
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-600 hover:bg-green-700 text-white
              font-semibold py-3 rounded-xl transition flex items-center
              justify-center gap-2"
            >
              {loading ? (
                "Memproses..."
              ) : (
                <>
                  Masuk Dashboard <ArrowRight size={18} />
                </>
              )}
            </button>

          </form>

          {/* Footer */}
          <div className="mt-8 text-center text-sm text-gray-500">
            Username: Nomor Pendaftaran <br />
            Password: NISN
          </div>
        </div>
      </div>
    </div>
  );
}