"use client";

import {
  User,
  Mail,
  Phone,
  MapPin,
  School,
  Calendar,
  IdCard,
} from "lucide-react";

export default function BiodataPage() {

  const user = {
    nama: "Budi Santoso",
    nisn: "1234567890",
    nik: "3201190806030002",
    email: "budi@gmail.com",
    no_hp: "08123456789",
    jenis_kelamin: "Laki-laki",
    ttl: "Bogor, 12 Januari 2008",
    alamat: "Jl. Raya Jasinga",
    asal_sekolah: "SMP Negeri 1 Jasinga",
    tahun: "2026",
  };

  return (
    <div className="p-4 md:p-6">
      <div className="grid lg:grid-cols-3 gap-6">

        {/* PROFILE CARD */}
        <div className="bg-white rounded-2xl shadow-sm border p-6 text-center">

          {/* Avatar */}
          <div className="flex justify-center">
            <div className="w-28 h-28 rounded-full bg-green-300 flex items-center justify-center text-white text-4xl font-bold border-4 border-gray-100 shadow">
              {user.nama.charAt(0)}
            </div>
          </div>

          {/* Nama */}
          <h2 className="mt-4 text-xl font-bold text-gray-800">
            {user.nama}
          </h2>

          {/* NISN */}
          <p className="text-gray-500">
            {user.nisn}
          </p>

          {/* Badge */}
          <div className="flex justify-center gap-2 mt-4">
            <span className="bg-red-500 text-white px-3 py-1 rounded-lg text-sm">
              PPDB
            </span>
            <span className="bg-green-500 text-white px-3 py-1 rounded-lg text-sm">
              {user.tahun}
            </span>
          </div>

          {/* Info Tambahan */}
          <div className="mt-6 text-sm text-gray-500">
            <p className="font-semibold text-gray-700">
              Asal Sekolah
            </p>
            <p>{user.asal_sekolah}</p>
          </div>

        </div>

        {/* DETAIL CARD */}
        <div className="bg-white rounded-2xl shadow-sm border p-6 lg:col-span-2">

          <h2 className="text-xl font-semibold mb-6 text-gray-700">
            Detail Pendaftar
          </h2>

          <div className="space-y-5 text-gray-700">

            <Item icon={IdCard} label="NISN" value={user.nisn} />
            <Item icon={IdCard} label="NIK" value={user.nik} />
            <Item icon={Mail} label="Email" value={user.email} />
            <Item icon={Phone} label="No HP" value={user.no_hp} />
            <Item icon={User} label="Jenis Kelamin" value={user.jenis_kelamin} />
            <Item icon={Calendar} label="TTL" value={user.ttl} />
            <Item icon={School} label="Asal Sekolah" value={user.asal_sekolah} />
            <Item icon={MapPin} label="Alamat" value={user.alamat} />

          </div>

        </div>

      </div>
    </div>
  );
}

function Item({ icon: Icon, label, value }) {
  return (
    <div className="flex items-start gap-4 border-b pb-4">

      <div className="bg-green-100 p-2 rounded-lg">
        <Icon size={18} className="text-green-600" />
      </div>

      <div>
        <p className="text-sm text-gray-500">
          {label}
        </p>
        <p className="font-medium">
          {value || "-"}
        </p>
      </div>

    </div>
  );
}