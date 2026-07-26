import { BookOpen, ClipboardList, Bus, Home, Users, CheckCircle } from "lucide-react";

export default function FeaturesCard() {
  const features = [
    {
      title: "Online Exam",
      icon: <ClipboardList className="w-10 h-10 text-blue-600" />,
      points: [
        "Mock Test and Final Exam",
        "Automatic Result Evaluation",
        "Add and Verify Questions",
      ],
    },
    {
      title: "Attendance Tracking",
      icon: <CheckCircle className="w-10 h-10 text-blue-600" />,
      points: [
        "Teachers can mark attendance",
        "Guardians can view reports",
        "Month-wise attendance chart",
      ],
    },
    {
      title: "Fee Management",
      icon: <BookOpen className="w-10 h-10 text-blue-600" />,
      points: [
        "Online fee payment tracking",
        "Guardian fee status view",
        "Admin verification of payments",
      ],
    },
    {
      title: "Hostel Management",
      icon: <Home className="w-10 h-10 text-blue-600" />,
      points: [
        "Room allocation system",
        "Check-in/out tracking",
        "Hostel fee record",
      ],
    },
    {
      title: "Transportation",
      icon: <Bus className="w-10 h-10 text-blue-600" />,
      points: [
        "Bus routes & schedules",
        "Transport fee details",
        "Guardian tracking access",
      ],
    },
    {
      title: "Lesson Planning",
      icon: <Users className="w-10 h-10 text-blue-600" />,
      points: [
        "Teachers upload lesson plans",
        "Photo proof from mobile camera",
        "Admins verify lesson status",
      ],
    },
  ];

  return (
    <section className="bg-gray-50 min-h-screen py-12 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-3xl font-bold text-blue-700 mb-4">
          School Portal Features
        </h1>
        <p className="text-gray-600 text-lg">
          A powerful platform connecting Guardians, Teachers, and Administrators — all in one place.
        </p>
      </div>

      {/* Feature Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature) => (
          <div
            className="bg-white shadow-md rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition">
            <div className="flex justify-center mb-3">{feature.icon}</div>
            <h2 className="text-xl font-semibold text-gray-800 mb-3 text-center">
              {feature.title}
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-1 text-left">
              {feature.points.map((point) => (
                <li>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
