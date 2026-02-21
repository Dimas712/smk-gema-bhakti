import FormSection from "./FormSection";

export default function StepConfirm({ form, prev, submit }) {
  return (
    <div className="space-y-8">

      {/* KONFIRMASI DATA */}
      <div className="text-gray-700">
        <FormSection title="Konfirmasi Data">
          <div className="space-y-3 text-sm text-gray-600">
            <Item label="Nama Lengkap" value={form.nama} />
            <Item label="NISN" value={form.nisn} />
            <Item label="Sekolah Asal" value={form.sekolahAsal} />
            <Item label="No HP / WhatsApp" value={form.noHp} />
          </div>
        </FormSection>
      </div>

      {/* CHECKBOX */}
      <label className="flex items-center gap-3 text-sm text-gray-600">
        <input
          type="checkbox"
          required
          className="w-4 h-4 text-green-600 rounded
                     focus:ring-green-500"
        />
        Saya menyatakan bahwa data yang diisi sudah benar
      </label>

      {/* BUTTON */}
      <div className="flex justify-between pt-4">
        <button
          onClick={prev}
          className="px-6 py-3 rounded-xl border border-gray-300
                     text-gray-700 font-semibold
                     hover:bg-gray-100 transition shadow cursor-pointer"
        >
          ← Kembali
        </button>

        <button
          onClick={submit}
          className="px-6 py-3 rounded-xl bg-green-600 text-white font-semibold
                     hover:bg-green-700 transition shadow-lg cursor-pointer"
        >
          Daftar Sekarang
        </button>
      </div>
    </div>
  );
}

/* ===== COMPONENT ===== */

function Item({ label, value }) {
  return (
    <div className="flex flex-col sm:flex-row sm:gap-2">
      <span className="font-medium text-gray-700">{label}:</span>
      <span>{value || "-"}</span>
    </div>
  );
}
