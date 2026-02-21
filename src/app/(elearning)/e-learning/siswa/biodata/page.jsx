"use client";

import { useState } from "react";
import BiodataTab from "@/component/siswa/BiodataTab";
import AkademikTab from "@/component/siswa/AkademikTab";

export default function BiodataSiswaPage() {
  const [tab, setTab] = useState("biodata");

  return (
    <>
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mt-16">
        Dashboard <span className="mx-2">›</span>
        <span className="text-gray-700 font-medium">
          Biodata Siswa
        </span>
      </div>

      {/* Title */}
      <h1 className="text-2xl font-bold mb-6 text-gray-800">
        Biodata Siswa
      </h1>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow p-2 inline-flex gap-2 mb-6">
        <TabButton
          active={tab === "biodata"}
          onClick={() => setTab("biodata")}
        >
          Biodata
        </TabButton>

        <TabButton
          active={tab === "akademik"}
          onClick={() => setTab("akademik")}
        >
          Akademik
        </TabButton>
      </div>

      {/* Content */}
      {tab === "biodata" && <BiodataTab />}
      {tab === "akademik" && <AkademikTab />}
    </>
  );
}

function TabButton({ children, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2 rounded-lg text-sm font-semibold transition
        ${
          active
            ? "bg-green-500 text-white shadow"
            : "text-gray-600 hover:bg-gray-100"
        }
      `}
    >
      {children}
    </button>
  );
}
