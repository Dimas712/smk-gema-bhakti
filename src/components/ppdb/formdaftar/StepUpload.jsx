import FormSection from "./FormSection";

export default function StepUpload({ files, setFiles, prev, next }) {
  const handleFile = (e) =>
    setFiles({ ...files, [e.target.name]: e.target.files[0] });

  return (
    <div className="space-y-8">
      
      {/* UPLOAD BERKAS */}
      <div className="text-gray-700">
        <FormSection title="Upload Berkas">
          <div className="grid md:grid-cols-2 gap-4 text-gray-500">
            <File label="Kartu Keluarga" name="kk" onChange={handleFile} />
            <File label="Akta Kelahiran" name="akta" onChange={handleFile} />
            <File label="Ijazah / SKL" name="ijazah" onChange={handleFile} />
            <File label="Rapor" name="rapor" onChange={handleFile} />
            <File label="Pas Foto" name="foto" onChange={handleFile} />
          </div>
        </FormSection>
      </div>

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
          onClick={next}
          className="px-6 py-3 rounded-xl bg-green-600 text-white font-semibold
                     hover:bg-green-700 transition shadow-lg cursor-pointer"
        >
          Lanjut →
        </button>
      </div>
    </div>
  );
}

/* ===== COMPONENT ===== */

function File({ label, ...props }) {
  return (
    <div className="space-y-1">
      <label className="text-sm font-medium text-gray-600">{label}</label>
      <input
        type="file"
        required
        {...props}
        className="w-full px-4 py-2.5 rounded-xl border bg-white
                   text-sm
                   focus:ring-2 focus:ring-green-500
                   focus:border-green-500 outline-none"
      />
    </div>
  );
}
