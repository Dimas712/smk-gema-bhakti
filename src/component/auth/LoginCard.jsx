"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginCard({
  title,
  subtitle,
  role,
  buttonColor = "bg-green-600",
}) {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // SIMULASI LOGIN (NANTI GANTI API)
      // const res = await fetch("/api/auth/login", {...})
      // const data = await res.json()

      // SIMULASI RESPONSE BACKEND
      const data = {
        token: "jwt-token",
        role: role.toLowerCase(), // siswa | guru | admin
      };

      // Simpan token
      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.role);

      // Redirect berdasarkan ROLE
    if (data.role === "siswa") {
      router.push("/e-learning/siswa/dashboard");
    } else if (data.role === "guru") {
      router.push("/e-learning/guru/dashboard");
    } else if (data.role === "admin") {
      router.push("/e-learning/admin/dashboard");
    }

    } catch (error) {
      alert("Login gagal");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl p-8">
      
      {/* Header */}
      <div className="text-center mb-8">
        <div className="text-4xl mb-3">🔐</div>
        <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
        <p className="text-gray-600 text-sm mt-1">{subtitle}</p>
      </div>

      {/* Form */}
      <form onSubmit={handleLogin} className="space-y-5">
        <div>
          <label className="block text-sm font-medium mb-1">
            Username / NIS / NIP
          </label>
          <input
            type="text"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Password
          </label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-green-500"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full ${buttonColor} text-white py-3 rounded-xl font-semibold hover:opacity-90 transition`}
        >
          {loading ? "Memproses..." : `Login sebagai ${role}`}
        </button>
      </form>

      <p className="text-center text-xs text-gray-500 mt-6">
        © {new Date().getFullYear()} SMK Gema Bhakti 1 Jasinga
      </p>
    </div>
  );
}
