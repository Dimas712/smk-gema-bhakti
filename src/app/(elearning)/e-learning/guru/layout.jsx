import HeaderGuru from "@/component/guru/HeaderGuru";
import SidebarGuru from "@/component/guru/SidebarGuru";

export default function GuruLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <SidebarGuru />

      {/* Content */}
      <div className="flex-1 md:ml-64">
        <HeaderGuru/>
        <main className="p-6 space-y-6">
            {children}
        </main>
      </div>
    </div>
  );
}
