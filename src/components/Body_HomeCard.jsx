import { useEffect, useRef, useState } from "react";

import online_fees from "../assets/public/images/online_fees.png";
import attendance from "../assets/public/images/attendance.jpg";
import vehicle_transfertation from "../assets/public/images/vehicle_transfertation.jpg";
import online_exam from "../assets/public/images/online_exam.jpg";
import hostel_management from "../assets/public/images/hostel_management.jpg";
  
export default function Body_HomeCard() {
  const cards = [
    {
      title: "Online Exam",
      image: online_exam,
      description:
        "Conduct secure online examinations with automated scheduling, real-time monitoring, instant result generation, and easy access for students and teachers."
    },
    {
      title: "Attendance Tracking",
      image: attendance,
      description:
        "Digitally record and monitor student attendance with detailed reports, class-wise summaries, and instant notifications for parents."
    },
    {
      title: "Fee Management",
      image: online_fees,
      description:
        "Simplify fee collection with online payments, automatic receipts, guardian access, and full transparency for administration."
    },
    {
      title: "Hostel Management",
      image: hostel_management,
      description:
        "Manage hostel operations including room allocation, attendance, check-in and check-out, and hostel fee records."
    },
    {
      title: "Transportation",
      image: vehicle_transfertation,
      description:
        "Organize school transportation with bus routes, schedules, transport fees, and safety-focused access for parents."
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center pt-14 pb-8">
        <span className="inline-block bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-sm font-medium tracking-wide">
          Our Features
        </span>

        <div className="mt-8 relative h-[52px]">
          <SmoothTextSwitch />
        </div>
      </div>

      {cards.map((card, index) => (
        <ZigZagCard
          key={index}
          card={card}
          reverse={index % 2 !== 0}
        />
      ))}
    </div>
  );
}

function SmoothTextSwitch() {
  const texts = [
    "Modern School Management",
    "Sharada Shishu Mandir, Alekhapada"
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <h2
      key={index}
      className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 tracking-tight animate-fadeSlide"
    >
      {texts[index]}
    </h2>
  );
}

function ZigZagCard({ card, reverse }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry], obs) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } items-center gap-10 my-20 transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="w-full md:w-1/2">
        <img
          src={card.image}
          alt={card.title}
          className="w-full h-[260px] object-cover rounded-xl shadow-md"
        />
      </div>

      <div className="w-full md:w-1/2 bg-white rounded-xl p-7 border shadow-sm">
        <h3 className="text-xl font-semibold text-blue-700 mb-3">
          {card.title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          {card.description}
        </p>
      </div>
    </div>
  );
}
