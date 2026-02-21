import api from "./api";

// ==========================
// GET ALL PENDAFTAR
// ==========================
export async function getAllPendaftar() {
  const res = await api.get("/pendaftar");
  return res.data;
}

// ==========================
// GET BY ID
// ==========================
export async function getPendaftarById(id) {
  const res = await api.get(`/pendaftar/${id}`);
  return res.data;
}

// ==========================
// CREATE
// ==========================
export async function createPendaftar(data) {
  const res = await api.post("/pendaftar", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data;
}

// ==========================
// UPDATE
// ==========================
export async function updatePendaftar(id, data) {
  const res = await api.put(`/pendaftar/${id}`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data;
}

// ==========================
// DELETE
// ==========================
export async function deletePendaftar(id) {
  const res = await api.delete(`/pendaftar/${id}`);
  return res.data;
}

// ==========================
// VERIFIKASI
// status:
// - menunggu
// - terverifikasi
// - ditolak
// ==========================
export async function verifikasiPendaftar(id, status, alasan_tolak = null) {
  const res = await api.put(`/pendaftar/${id}/verifikasi`, {
    status,
    alasan_tolak,
  });
  return res.data;
}