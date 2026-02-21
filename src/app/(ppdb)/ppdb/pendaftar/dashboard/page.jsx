"use client";

import { useState, useEffect, useRef } from "react";
import {
    CheckCircle,
    Clock,
    FileText,
    AlertCircle,
} from "lucide-react";
import Swal from "sweetalert2";

export default function DashboardPendaftarPage() {

    const applicant = {
        name: "Budi Santoso",
        regNumber: "PPDB-2024-001",
        email: "budi.santoso@gmail.com",
        schoolOrigin: "SMP Negeri 1 Jasinga",
        status: "Menunggu Verifikasi",
        documents: [
            { name: "Kartu Keluarga", status: "Terupload", date: "08 Feb 2024" },
            { name: "Akte Kelahiran", status: "Terupload", date: "08 Feb 2024" },
            { name: "Ijazah / SKL", status: "Review", date: "08 Feb 2024" },
            { name: "Pas Foto", status: "Terupload", date: "08 Feb 2024" },
        ]
    };

    const [status, setStatus] = useState(applicant.status);
    const isFirstRender = useRef(true);

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }

        Swal.fire({
            title: status === "Terverifikasi" ? "Berkas Terverifikasi!" : "Status Berubah",
            text:
                status === "Terverifikasi"
                    ? "Selamat, berkas Anda telah disetujui oleh admin."
                    : "Status berkas Anda kembali ke Menunggu Verifikasi.",
            icon: status === "Terverifikasi" ? "success" : "info",
            confirmButtonColor: status === "Terverifikasi" ? "#16a34a" : "#ca8a04"
        });
    }, [status]);

    return (
        <div className="min-h-screen bg-gray-50 flex">

            {/* Main Content */}
            <main className="flex-1 min-w-0 overflow-y-auto lg:ml-64">

                <div className="p-6 lg:p-8 max-w-5xl mx-auto space-y-8">
                    <h1 className="text-3xl font-bold">
                        Halo, {applicant.name}
                    </h1>

                    {/* Status */}
                    <div
                        className={`rounded-2xl p-6 border ${status === "Terverifikasi"
                            ? "bg-green-50 border-green-200"
                            : "bg-yellow-50 border-orange-200"
                            }`}
                    >
                        <div className="flex items-center gap-3 text-2xl font-bold">
                            {status === "Terverifikasi" ? (
                                <CheckCircle className="text-green-600" />
                            ) : (
                                <Clock className="text-orange-600" />
                            )}
                            {status}
                        </div>

                        <button
                            onClick={() =>
                                setStatus(
                                    status === "Menunggu Verifikasi"
                                        ? "Terverifikasi"
                                        : "Menunggu Verifikasi"
                                )
                            }
                            className="mt-4 px-4 py-2 bg-white border rounded-lg text-sm"
                        >
                            (Demo: Ubah Status)
                        </button>
                    </div>

                    {/* Berkas */}
                    <div className="bg-white rounded-2xl p-6 border">
                        <h3 className="font-bold mb-4">Kelengkapan Berkas</h3>
                        <div className="space-y-3">
                            {applicant.documents.map((doc, i) => (
                                <div
                                    key={i}
                                    className="flex justify-between items-center p-4 bg-gray-50 rounded-xl"
                                >
                                    <div className="flex items-center gap-3">
                                        <FileText />
                                        <div>
                                            <div className="font-medium">{doc.name}</div>
                                            <div className="text-xs text-gray-400">
                                                {doc.date}
                                            </div>
                                        </div>
                                    </div>
                                    <span className="text-xs font-semibold bg-green-100 text-green-700 px-3 py-1 rounded-full">
                                        {doc.status}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Info */}
                    <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 flex gap-3">
                        <AlertCircle className="text-blue-600" />
                        <p className="text-sm text-blue-700">
                            Pastikan nomor WhatsApp aktif untuk informasi dari panitia.
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
}