"use client";

import Link from "next/link";
import Swal from "sweetalert2";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  User,
  FileText,
  BadgeCheck,
  LogOut,
  X,
} from "lucide-react";

export default function SidebarPendaftar({ open, setOpen }) {
  const pathname = usePathname();
  const router = useRouter();

  const menu = [
    {
      label: "Dashboard",
      href: "/ppdb/pendaftar/dashboard",
      icon: LayoutDashboard,
    },
    {
      label: "Biodata",
      href: "/ppdb/pendaftar/biodata",
      icon: User,
    },
    {
      label: "Berkas",
      href: "/ppdb/pendaftar/berkas",
      icon: FileText,
    },
    {
      label: "Status",
      href: "/ppdb/pendaftar/status",
      icon: BadgeCheck,
    },
  ];

  const handleLogout = async () => {
    const result = await Swal.fire({
      title: "Yakin mau logout?",
      text: "Sesi pendaftar akan berakhir",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#dc2626",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Ya, Logout",
      cancelButtonText: "Batal",
    });

    if (result.isConfirmed) {
      localStorage.removeItem("pendaftarToken");
      localStorage.removeItem("pendaftarUser");

      await Swal.fire({
        title: "Logout berhasil",
        icon: "success",
        timer: 1000,
        showConfirmButton: false,
      });

      router.replace("/ppdb/auth/login/pendaftar");
    }
  };

  return (
    <>
      {/* Overlay Mobile */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
        />
      )}

      <aside
        className={`
          fixed top-0 left-0 h-screen w-64 bg-green-700 text-white flex flex-col z-100
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        {/* Header */}
        <div className="px-6 py-5 text-xl font-bold border-b border-white/20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/SMK.jpg"
              width={40}
              height={40}
              alt="Logo SMK Gema Bhakti"
              className="rounded-full"
            />
            <span className="text-lg font-bold">Pendaftar PPDB</span>
          </div>

          <button onClick={() => setOpen(false)} className="md:hidden">
            <X size={22} />
          </button>
        </div>

        {/* Menu */}
        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          {menu.map((item, i) => {
            const active = pathname === item.href;
            const Icon = item.icon;

            return (
              <Link
                key={i}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition
                  ${
                    active
                      ? "bg-white text-green-700 font-semibold shadow"
                      : "hover:bg-white/10"
                  }
                `}
              >
                <Icon size={20} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Logout */}
        <div className="px-4 pb-4">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl
              bg-red-600 hover:bg-red-700 transition font-semibold cursor-pointer"
          >
            <LogOut size={20} />
            Logout
          </button>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-white/20 text-sm">
          © {new Date().getFullYear()} SMK Gema Bhakti
        </div>
      </aside>
    </>
  );
}