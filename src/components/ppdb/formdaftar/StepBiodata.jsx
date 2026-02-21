import FormSection from "./FormSection";

export default function StepBiodata({ form, setForm, next }) {
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <div className="space-y-8">
      
      {/* DATA PRIBADI */}
      <div className="text-gray-700">
      <FormSection title="Data Pribadi">
        <div className="grid md:grid-cols-2 gap-4 text-gray-500">
          <Input label="Nama Lengkap" name="nama" onChange={handleChange} />
          <Input label="NISN" name="nisn" onChange={handleChange} />
          <Input label="NIK" name="nik" onChange={handleChange} />
          <Input label="Tempat Lahir" name="tempatLahir" onChange={handleChange} />
          <Input
            type="date"
            label="Tanggal Lahir"
            name="tanggalLahir"
            onChange={handleChange}
          />

          <Select label="Jenis Kelamin" name="jenisKelamin" onChange={handleChange}>
            <option value="">-- Pilih --</option>
            <option value="L">Laki-laki</option>
            <option value="P">Perempuan</option>
          </Select>
        </div>
      </FormSection>
      </div>

      {/* SEKOLAH ASAL */}
      <div className="text-gray-700">
      <FormSection title="Sekolah Asal">
        <Input
          label="Nama Sekolah Asal"
          name="sekolahAsal"
          onChange={handleChange}
        />
      </FormSection>
      </div>

      {/* ORANG TUA */}
      <div className="text-gray-700">
      <FormSection title="Data Orang Tua">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input label="Nama Ayah" name="namaAyah" onChange={handleChange} />
          <Input label="Nama Ibu" name="namaIbu" onChange={handleChange} />
          <Input label="No HP / WhatsApp" name="noHp" onChange={handleChange} />
        </div>
      </FormSection>
      </div>

      {/* BUTTON */}
      <div className="flex justify-end pt-4">
        <button
          onClick={next}
          className="px-6 py-3 rounded-xl bg-green-600 text-white font-semibold
                     hover:bg-green-700 transition shadow-lg cursor-pointer"
        >
          Lanjut Upload →
        </button>
      </div>
    </div>
  );
}

/* ===== COMPONENT ===== */

function Input({ label, ...props }) {
  return (
    <div className="space-y-1">
      <label className="text-sm font-medium text-gray-600">{label}</label>
      <input
        {...props}
        required
        className="w-full px-4 py-2.5 rounded-xl border
                   focus:ring-2 focus:ring-green-500
                   focus:border-green-500 outline-none"
      />
    </div>
  );
}

function Select({ label, children, ...props }) {
  return (
    <div className="space-y-1">
      <label className="text-sm font-medium text-gray-600">{label}</label>
      <select
        {...props}
        required
        className="w-full px-4 py-2.5 rounded-xl border
                   focus:ring-2 focus:ring-green-500
                   focus:border-green-500 outline-none"
      >
        {children}
      </select>
    </div>
  );
}
