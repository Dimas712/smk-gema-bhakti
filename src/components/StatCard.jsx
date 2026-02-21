"use client";

import Link from "next/link";

export default function StatCard({
  icon: Icon,
  label,
  value,
  bgColor,
  textColor,
  href,
}) {
  return (
    <Link href={href} className="block">
      <div
        className="
          bg-white rounded-2xl p-6 shadow flex items-center gap-4
          cursor-pointer transition
          hover:shadow-lg hover:-translate-y-1
          active:scale-[0.98]
        "
      >
        <div className={`p-3 rounded-xl ${bgColor} ${textColor}`}>
          <Icon size={28} />
        </div>

        <div>
          <p className="text-gray-500 text-sm">{label}</p>
          <h3 className={`text-2xl font-bold ${textColor}`}>
            {value}
          </h3>
        </div>
      </div>
    </Link>
  );
}