"use client";

import { Menu } from "lucide-react";

export default function NavbarPendaftar({ setOpen, name = "Pendaftar" }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b px-4 md:px-6 py-4 flex items-center justify-between">
      
      {/* Kiri */}
      <div className="flex items-center gap-3">
        {/* Hamburger Mobile */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100"
        >
          <Menu size={22} />
        </button>

        <h2 className="text-lg md:text-xl font-semibold text-gray-800">
          Dashboard Pendaftar
        </h2>
      </div>

    </header>
  );
}