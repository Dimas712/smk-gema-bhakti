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
import DetailPendaftarModal from "@/components/ppdb/admin/DetailPendaftarModal";
import { useEffect, useState} from "react";
import { useRouter } from "next/navigation";
import api from "../../../../../lib/api";

export default function DashboardAdminPPDB() {
  const [openModal, setOpenModal] = useState(false);
  const [selectedPendaftar, setSelectedPendaftar] = useState(null);
  const [stats, setStats] = useState(null);
  const [latest, setLatest] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const resStats = await api.get("/dashboard/stats");
        setStats(resStats.data);

        // Ambil pendaftar terbaru
        const resLatest = await api.get("/pendaftar/latest");
        setLatest(resLatest.data);

      } catch (error) {
        console.error(error);

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
                  <th className="py-3 px-2">NISN</th>
                  <th className="py-3 px-2">Status</th>
                  <th className="py-3 px-2">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {latest.length === 0 ? (
                  <tr>
                    <td colSpan="4" className="text-center py-4 text-gray-400">
                      Belum ada pendaftar
                    </td>
                  </tr>
                ) : (
                  latest.map((item) => (
                    <tr key={item.id_pendaftar} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-2">{item.nama}</td>
                      <td className="py-3 px-2">{item.sekolah_asal}</td>
                      <td className="py-3 px-2">{item.nisn}</td>
                      <td className="py-3 px-2">
                        <span
                          className={`px-3 py-1 rounded-full text-xs ${
                            item.status === "terverifikasi"
                              ? "bg-green-300 text-green-700"
                              : item.status === "ditolak"
                              ? "bg-red-100 text-red-700"
                              : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          {item.status}
                        </span>
                      </td>
                      <td className="py-3 px-2 flex gap-2">
                        <button
                          onClick={async () => {
                            try {
                              const res = await api.get(`/pendaftar/${item.id_pendaftar}`);
                              setSelectedPendaftar(res.data);
                              setOpenModal(true);
                            } catch (error) {
                              console.error(error);
                            }
                          }}
                          className="flex items-center gap-1 px-3 py-1 text-xs rounded-lg bg-blue-600 text-white hover:bg-blue-700 cursor-pointer"
                        >
                          <Eye size={14} />
                          Detail
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </section>
      <DetailPendaftarModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        data={selectedPendaftar}
      />
      </div>
    </main>
  );
}