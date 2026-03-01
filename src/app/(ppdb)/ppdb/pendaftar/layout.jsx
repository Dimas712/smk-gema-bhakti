"use client";

import { useState } from "react";
import SidebarPendaftar from "@/components/ppdb/pendaftar/SidebarPendaftar";
import NavbarPendaftar from "@/components/ppdb/pendaftar/NavbarPendaftar";

export default function PendaftarLayout({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 mt-15">
      
      {/* Sidebar */}
      <SidebarPendaftar open={open} setOpen={setOpen} />

      {/* Content */}
      <div className="flex flex-col min-h-screen md:ml-64">
        
        {/* Navbar */}
        <NavbarPendaftar setOpen={setOpen} name="Budi Santoso" />

        {/* Page */}
        <main className="flex-1 p-4 md:p-6">
          {children}
        </main>

      </div>
    </div>
  );
}