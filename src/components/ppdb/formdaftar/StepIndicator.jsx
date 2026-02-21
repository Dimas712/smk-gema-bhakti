export default function StepIndicator({ step }) {
  const steps = ["Biodata", "Upload Berkas", "Konfirmasi"];

  return (
    <div className="flex justify-center gap-3 mt-6 text-sm font-medium">
      {steps.map((label, i) => (
        <span
          key={i}
          className={`px-4 py-1 rounded-full ${
            step >= i + 1
              ? "bg-green-600 text-white"
              : "bg-gray-200 text-gray-500"
          }`}
        >
          {label}
        </span>
      ))}
    </div>
  );
}
