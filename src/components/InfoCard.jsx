export default function InfoCard({ title, value, color = "green" }) {
  const colors = {
    green: "border-green-500",
    blue: "border-blue-500",
    purple: "border-purple-500",
  };

  return (
    <div className={`bg-white rounded-xl shadow p-6 border-l-4 ${colors[color]}`}>
      <p className="text-sm text-gray-500 mb-1">
        {title}
      </p>
      <p className="text-xl font-bold">
        {value}
      </p>
    </div>
  );
}
