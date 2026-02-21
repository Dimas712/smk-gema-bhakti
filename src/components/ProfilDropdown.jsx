"use client";

import Link from "next/link";

export default function ProfilDropdown({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="absolute right-0 mt-3 w-40 bg-white text-gray-700 rounded-md shadow-lg overflow-hidden z-50 cursor-pointer">
      <Link
        href="/e-learning/siswa/biodata"
        onClick={onClose}
        className="block px-4 py-2 text-sm hover:bg-gray-100"
      >
        Biodata
      </Link>

      <button
        onClick={() => {
          // contoh logout
          localStorage.removeItem("token");
          window.location.href = "/";
        }}
        className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 text-red-600 cursor-pointer"
      >
        Keluar
      </button>
    </div>
  );
}
