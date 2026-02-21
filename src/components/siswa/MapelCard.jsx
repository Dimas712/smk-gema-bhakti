import { BookOpen } from "lucide-react";

export default function MapelCard({ title, total, onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-2xl shadow p-6 flex items-center gap-4 
                 cursor-pointer hover:shadow-lg hover:scale-[1.02] 
                 active:scale-[0.97] transition-all duration-200"
    >
      <div className="w-14 h-14 bg-sky-500 rounded-xl flex items-center justify-center text-white">
        <BookOpen size={26} />
      </div>

      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-gray-500">
          {total} Materi
        </p>
      </div>
    </div>
  );
}
