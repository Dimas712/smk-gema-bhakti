export async function getStats(token) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/dashboard/stats`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Gagal mengambil stats");
  }

  return response.json();
}