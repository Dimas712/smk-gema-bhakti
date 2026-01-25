import SidebarSiswa from "@/component/siswa/SidebarSiswa";
import HeaderSiswa from "@/component/siswa/HeaderSiswa";

export default function SiswaLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <SidebarSiswa />

      {/* Content */}
      <div className="flex-1 md:ml-64">
        <HeaderSiswa />
        <main className="p-6 space-y-6">
          {children}
        </main>
      </div>
    </div>
  );
}
