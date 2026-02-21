import InfoCard from "../InfoCard";

export default function AkademikTab() {
  const semester = "Semester 2 (Genap)";
  const kelas = "XII A";

  return (
    <div className="bg-white rounded-xl shadow p-6 text-gray-700">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
        <h2 className="font-semibold text-lg">Data Akademik</h2>
        <div className="text-sm text-gray-600 mt-1 md:mt-0">
          <span className="mr-4">{semester}</span>
          <span>🏫 Kelas: {kelas}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <InfoCard title="Total Mapel" value="12" />
        <InfoCard title="Rata-rata Nilai" value="88.50" />
        <InfoCard title="Ranking Kelas" value="3" />
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border rounded-xl overflow-hidden">
          <thead className="bg-gray-100 text-sm">
            <tr>
              <th className="p-3 text-left">Mata Pelajaran</th>
              <th className="p-3 text-center">Nilai</th>
              <th className="p-3 text-center">Predikat</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {[
              { mapel: "Matematika", nilai: 90 },
              { mapel: "Bahasa Indonesia", nilai: 88 },
              { mapel: "Bahasa Inggris", nilai: 92 },
              { mapel: "Produktif RPL", nilai: 95 },
            ].map((item, i) => (
              <tr key={i} className="border-t">
                <td className="p-3">{item.mapel}</td>
                <td className="p-3 text-center">{item.nilai}</td>
                <td className="p-3 text-center font-semibold">
                  {item.nilai >= 90 ? "A" : "B"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
