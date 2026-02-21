"use client";

import { useState } from "react";
import SidebarAdmin from "@/components/ppdb/admin/SidebarAdmin";
import NavbarAdmin from "@/components/ppdb/admin/NavbarAdmin";

export default function AdminLayout({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <SidebarAdmin open={open} setOpen={setOpen} />

      {/* Content Wrapper */}
      <div className="flex flex-col min-h-screen md:ml-64">
        {/* Navbar */}
        <NavbarAdmin setOpen={setOpen} />

        {/* Page Content */}
        <main className="flex-1 p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
