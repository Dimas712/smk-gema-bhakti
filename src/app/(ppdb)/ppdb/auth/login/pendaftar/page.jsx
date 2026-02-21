"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { User, Lock, ArrowRight } from "lucide-react";

export default function LoginPendaftarPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate network delay
    setTimeout(() => {
      setLoading(false);
      router.push("/ppdb/pendaftar/dashboard");
    }, 1000); // 1 second delay
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-green-100 p-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl overflow-hidden">
        {/* Header Section */}
        <div className="bg-green-700 p-8 text-center text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle,white,transparent)] animate-spin-slow"></div>
        </div>
          <Image
            src="/smk.jpg" // Using existing asset
            alt="Logo"
            width={80}
            height={80}
            className="mx-auto rounded-full bg-white p-1 mb-4 shadow-lg relative z-10"
          />
          <h1 className="text-2xl font-bold relative z-10">Login Calon Siswa</h1>
          <p className="text-green-100 text-sm relative z-10">Masuk untuk cek status pendaftaran</p>
        </div>

        {/* Form Section */}
        <div className="p-8">
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nomor Pendaftaran / Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <User size={20} />
                </div>
                <input
                  type="text"
                  required
                  placeholder="Contoh: PPDB-2024-001"
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password / NISN
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <Lock size={20} />
                </div>
                <input
                  type="password"
                  required
                  placeholder="Masukkan password..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-green-500/30 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              {loading ? (
                "Memproses..."
              ) : (
                <>
                  Masuk Dashboard <ArrowRight size={20} />
                </>
              )}
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              Belum mendaftar?{" "}
              <a href="/ppdb/auth/daftar" className="text-green-600 font-semibold hover:underline">
                Daftar Sekarang
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
