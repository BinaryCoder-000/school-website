import { useState } from "react";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default function Calendar() {
  const today = new Date();

  const [currentDate, setCurrentDate] = useState(
    new Date(today.getFullYear(), today.getMonth(), 1)
  );

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDay = new Date(year, month, 1).getDay(); // 0 = Sunday
  const totalDays = new Date(year, month + 1, 0).getDate();

  const prevMonth = () =>
    setCurrentDate(new Date(year, month - 1, 1));
  const nextMonth = () =>
    setCurrentDate(new Date(year, month + 1, 1));

  // Convert Sunday-first to Monday-first
  const adjustedFirstDay = firstDay === 0 ? 6 : firstDay - 1;

  return (
    <div className="w-72 bg-white shadow rounded border">
      {/* Header */}
      <div className="flex justify-between items-center bg-blue-600 text-white px-3 py-2">
        <button onClick={prevMonth}>&lt;</button>
        <span className="font-semibold">
          {currentDate.toLocaleString("default", {
            month: "long",
            year: "numeric",
          })}
        </span>
        <button onClick={nextMonth}>&gt;</button>
      </div>

      {/* Weekdays */}
      <div className="grid grid-cols-7 text-center text-sm bg-blue-500 text-white">
        {days.map((day) => (
          <div key={day} className="py-1">
            {day}
          </div>
        ))}
      </div>

      {/* Dates */}
      <div className="grid grid-cols-7 text-center text-sm">
        {/* Empty spaces before first day */}
        {Array.from({ length: adjustedFirstDay }).map((_, i) => (
          <div key={i}></div>
        ))}

        {Array.from({ length: totalDays }).map((_, i) => {
          const date = i + 1;

          const isToday =
            date === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear();

          const isSunday =
            new Date(year, month, date).getDay() === 0;

          return (
            <div
              key={date}
              className={`py-2 border border-gray-300 cursor-pointer
                ${
                  isToday
                    ? "bg-black text-white font-bold"
                    : isSunday
                    ? "bg-[#e16f30] text-white font-semibold"
                    : "hover:bg-blue-100"
                }
              `}
            >
              {date}
            </div>
          );
        })}
      </div>
    </div>
  );
}
