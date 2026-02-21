"use client";

import { useState, useEffect } from "react";
import { Search, FileDown, FileSpreadsheet } from "lucide-react";
import { getAllPendaftar } from "@/lib/pendaftar";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

export default function VerifikasiPage() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await getAllPendaftar();
      setData(res);
    } catch (error) {
      console.error(error);
    }
  };

  const filteredData = data.filter(
    (item) =>
      item.nama.toLowerCase().includes(search.toLowerCase()) ||
      item.nisn.includes(search) ||
      (item.sekolah_asal || "").toLowerCase().includes(search.toLowerCase())
  );

  const formatStatus = (status) => {
    if (status === "terverifikasi") return "Terverifikasi";
    if (status === "ditolak") return "Ditolak";
    return "Menunggu";
  };

  const statusStyle = (status) => {
    switch (status) {
      case "terverifikasi":
        return "bg-green-100 text-green-700";
      case "ditolak":
        return "bg-red-100 text-red-700";
      default:
        return "bg-yellow-100 text-yellow-700";
    }
  };

  // ================= PDF =================
  const downloadPDF = () => {
    const doc = new jsPDF();

    doc.text("Data Verifikasi Pendaftar", 14, 15);

    const tableColumn = ["No", "Nama", "NISN", "Sekolah Asal", "Status"];
    const tableRows = [];

    filteredData.forEach((item, index) => {
      tableRows.push([
        index + 1,
        item.nama,
        item.nisn,
        item.sekolah_asal || "-",
        formatStatus(item.status),
      ]);
    });

    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
      startY: 20,
    });

    doc.save("verifikasi-pendaftar.pdf");
  };

  // ================= EXCEL =================
  const downloadExcel = () => {
    const excelData = filteredData.map((item, index) => ({
      No: index + 1,
      Nama: item.nama,
      NISN: item.nisn,
      "Sekolah Asal": item.sekolah_asal || "-",
      Status: formatStatus(item.status),
    }));

    const worksheet = XLSX.utils.json_to_sheet(excelData);
    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(workbook, worksheet, "Pendaftar");

    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });

    const fileData = new Blob([excelBuffer], {
      type: "application/octet-stream",
    });

    saveAs(fileData, "verifikasi-pendaftar.xlsx");
  };

  return (
    <div className="space-y-6">

      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">
          Verifikasi Pendaftar
        </h1>
        <p className="text-sm text-gray-500">
          Daftar pendaftar yang perlu diverifikasi
        </p>
      </div>

      {/* Search + Export */}
      <div className="flex flex-wrap gap-3 justify-between items-center">

        {/* Search */}
        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow w-full md:w-80">
          <Search size={18} className="text-gray-400" />
          <input
            type="text"
            placeholder="Cari nama / NISN / Sekolah..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full outline-none text-sm text-gray-700"
          />
        </div>

        {/* Export */}
        <div className="flex gap-2">
          <button
            onClick={downloadPDF}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white text-sm"
          >
            <FileDown size={16} />
            PDF
          </button>

          <button
            onClick={downloadExcel}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white text-sm"
          >
            <FileSpreadsheet size={16} />
            Excel
          </button>
        </div>

      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-6 py-4 text-left">No</th>
              <th className="px-6 py-4 text-left">Nama</th>
              <th className="px-6 py-4 text-left">NISN</th>
              <th className="px-6 py-4 text-left">Sekolah Asal</th>
              <th className="px-6 py-4 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr
                key={item.id_pendaftar}
                className="border-t hover:bg-gray-50 transition text-gray-700"
              >
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4 font-medium">
                  {item.nama}
                </td>
                <td className="px-6 py-4">{item.nisn}</td>
                <td className="px-6 py-4">
                  {item.sekolah_asal || "-"}
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${statusStyle(
                      item.status
                    )}`}
                  >
                    {formatStatus(item.status)}
                  </span>
                </td>
              </tr>
            ))}

            {filteredData.length === 0 && (
              <tr>
                <td
                  colSpan={5}
                  className="px-6 py-10 text-center text-gray-500"
                >
                  Data tidak ditemukan
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

    </div>
  );
}