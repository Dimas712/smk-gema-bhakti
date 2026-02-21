"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  User,
  BookOpen,
  ClipboardList,
  FileText,
  LogOut,
  Menu,
  X,
} from "lucide-react";

export default function SidebarGuru() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const menuItems = [
    { type: "section", label: "Menu" },
    {
      type: "item",
      label: "Dashboard",
      href: "/e-learning/guru/dashboard",
      icon: LayoutDashboard,
    },

    { type: "section", label: "Data Dasar" },
    {
      type: "item",
      label: "Biodata Guru",
      href: "/e-learning/guru/biodata",
      icon: User,
    },

    { type: "section", label: "Pembelajaran" },
    {
      type: "item",
      label: "Materi",
      href: "/e-learning/guru/materi",
      icon: BookOpen,
    },
    {
      type: "item",
      label: "Tugas",
      href: "/e-learning/guru/tugas",
      icon: ClipboardList,
    },
    {
      type: "item",
      label: "Nilai",
      href: "/e-learning/guru/nilai",
      icon: FileText,
    },

    { type: "section", label: "Akun" },
    {
      type: "logout",
      label: "Logout",
      icon: LogOut,
    },
  ];

  function handleLogout() {
    localStorage.removeItem("token");
    window.location.href = "/";
  }

  return (
    <>
      {/* HAMBURGER */}
      <button
        onClick={() => setOpen(true)}
        className="fixed top-4 left-4 z-50 md:hidden bg-white p-2 rounded-xl shadow"
      >
        <Menu size={22} />
      </button>

      {/* OVERLAY */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`
          fixed top-0 left-0 w-64 h-screen bg-white border-r flex flex-col z-50
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        {/* HEADER */}
        <div className="p-6 border-b flex flex-col items-center gap-3 relative">
          <button
            onClick={() => setOpen(false)}
            className="absolute right-4 top-4 md:hidden"
          >
            <X size={20} />
          </button>

          <img
            src="/smk.jpg"
            alt="Logo Sekolah"
            className="w-20 h-20 object-cover rounded-full bg-white p-2"
          />

          <p className="text-sm font-semibold text-gray-700">
            Panel Guru
          </p>
        </div>

        {/* MENU */}
        <nav className="flex-1 overflow-y-auto p-4 text-sm">
          {menuItems.map((item, index) => {
            if (item.type === "section") {
              return (
                <p
                  key={index}
                  className="mt-5 mb-2 px-2 text-xs font-semibold text-gray-400 uppercase"
                >
                  {item.label}
                </p>
              );
            }

            const Icon = item.icon;

            if (item.type === "logout") {
              return (
                <button
                  key={index}
                  onClick={handleLogout}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-600 hover:bg-red-50 cursor-pointer"
                >
                  <Icon size={18} />
                  {item.label}
                </button>
              );
            }

            const isActive = pathname === item.href;

            return (
              <Link
                key={index}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl mb-1 transition
                  ${
                    isActive
                      ? "bg-blue-100 text-blue-700 font-semibold"
                      : "hover:bg-blue-50 text-gray-700"
                  }
                `}
              >
                <Icon size={18} />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
