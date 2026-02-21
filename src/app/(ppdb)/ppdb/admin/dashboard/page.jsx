"use client";

import {
  User,
  CheckCircle,
  Clock,
  XCircle,
  Eye,
  Check,
  X
} from "lucide-react";

import StatCard from "@/components/StatCard";
import { useEffect, useState} from "react";
import { useRouter } from "next/navigation";
import api from "../../../../../lib/api";

export default function DashboardAdminPPDB() {
  const [stats, setStats] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const res = await api.get("/dashboard/stats"); // ✅ endpoint benar
        setStats(res.data);
      } catch (error) {
        console.error(error);

        // kalau token invalid → logout
        if (error.response?.status === 401) {
          localStorage.removeItem("adminToken");
          router.replace("/ppdb/auth/login/admin");
        }
      }
    };

    fetchDashboard();
  }, [router]);

  if (!stats) return <p>Loading...</p>;

  return (
    <main className="min-h-screen bg-gray-100 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <header className="mb-10">
          <h1 className="text-3xl font-bold text-gray-800">
            Dashboard Admin PPDB
          </h1>
          <p className="text-gray-500">
            SMK Gema Bhakti 1 Jasinga
          </p>
        </header>

        {/* Statistik */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">

          <StatCard
            icon={User}
            label="Total Pendaftar"
            value={stats.totalPendaftar}
            bgColor="bg-blue-100"
            textColor="text-blue-600"
            href="/ppdb/admin/pendaftar"
          />

          <StatCard
            icon={CheckCircle}
            label="Terverifikasi"
            value={stats.terverifikasi}
            bgColor="bg-green-100"
            textColor="text-green-600"
            href="/ppdb/admin/verifikasi"
          />

          <StatCard
            icon={Clock}
            label="Menunggu"
            value={stats.menunggu}
            bgColor="bg-yellow-100"
            textColor="text-yellow-600"
            href="/ppdb/admin/verifikasi"
          />

          <StatCard
            icon={XCircle}
            label="Ditolak"
            value={stats.ditolak}
            bgColor="bg-red-100"
            textColor="text-red-600"
            href="/ppdb/admin/verifikasi"
          />

        </section>

        {/* Table Pendaftar */}
        <section className="bg-white rounded-2xl shadow p-6 text-gray-700">
          <h2 className="text-xl font-semibold mb-4">
            Data Pendaftar Terbaru
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-gray-500 border-b">
                  <th className="py-3 px-2">Nama</th>
                  <th className="py-3 px-2">Asal Sekolah</th>
                  <th className="py-3 px-2">Status</th>
                  <th className="py-3 px-2">Aksi</th>
                </tr>
              </thead>
              <tbody>

                <tr className="border-b hover:bg-gray-50">
                  <td className="py-3 px-2">Ahmad Fauzi</td>
                  <td className="py-3 px-2">SMP Negeri 1 Jasinga</td>
                  <td className="py-3 px-2">
                    <span className="px-3 py-1 rounded-full text-xs bg-yellow-100 text-yellow-700">
                      Menunggu
                    </span>
                  </td>
                  <td className="py-3 px-2 flex gap-2">
                    <button className="flex items-center gap-1 px-3 py-1 text-xs rounded-lg bg-green-600 text-white hover:bg-green-700">
                      <Check size={14} />
                      Verifikasi
                    </button>
                    <button className="flex items-center gap-1 px-3 py-1 text-xs rounded-lg bg-red-600 text-white hover:bg-red-700">
                      <X size={14} />
                      Tolak
                    </button>
                  </td>
                </tr>

                <tr className="border-b hover:bg-gray-50">
                  <td className="py-3 px-2">Siti Aisyah</td>
                  <td className="py-3 px-2">SMP Al-Ikhlas</td>
                  <td className="py-3 px-2">
                    <span className="px-3 py-1 rounded-full text-xs bg-green-100 text-green-700">
                      Terverifikasi
                    </span>
                  </td>
                  <td className="py-3 px-2">
                    <button className="flex items-center gap-1 px-3 py-1 text-xs rounded-lg bg-blue-600 text-white hover:bg-blue-700">
                      <Eye size={14} />
                      Detail
                    </button>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        </section>

      </div>
    </main>
  );
}