import { Bell } from "lucide-react";
export default function Notice() {
  const notices = [
    "🔔 Admission Open 2025",
    "🏅 Annual Sports Meet on 20 December",
    "📘 New Books Available for New Session",
    "📢 Holiday on 25 December",
    "📝 Exams start from 10 January"
  ];

  return (
    <div className="w-full bg-blue-600 py-1 overflow-hidden border flex position-relative">
      <div className="flex items-center  position-absolute position-top bg-orange-500 z-1 pl-4 pr-4 pt-3 pb-3">
        <Bell className="w-6 h-6 text-white-700 cursor-pointer" />
        <h2 className="font-semibold pl-2" >Notice</h2>
      </div>
      <div className="marquee flex whitespace-nowrap text-white text-lg font-semibold items-center">
        <div className="marquee-content flex gap-10">
          {notices.map((n, i) => (
            <span key={i}>{n}</span>
          ))}
        </div>

        <div className="marquee-content flex gap-10">
          {notices.map((n, i) => (
            <span key={"dup-" + i}>{n}</span>
          ))}
        </div>
      </div>
      
    </div>
  );
}
