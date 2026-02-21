"use client";

import { Menu } from "lucide-react";

export default function NavbarAdmin({ setOpen }) {
  return (
    <header className="h-16 bg-white shadow flex items-center px-6 sticky top-0 z-20">
      <button
        onClick={() => setOpen(true)}
        className="md:hidden mr-4"
      >
        <Menu size={24} />
      </button>

      <h1 className="font-semibold text-lg text-gray-700">
        SMK Gema Bhakti 1 Jasinga Admin Panel
      </h1>
    </header>
  );
}
