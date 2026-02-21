export default function Item({ label, value }) {
  return (
    <div>
      <p className="text-gray-500 text-xs mb-1">
        {label}
      </p>
      <p className="font-medium">
        {value}
      </p>
    </div>
  );
}
