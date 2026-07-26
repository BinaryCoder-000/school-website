import Navbar from "../components/Navbar";
import { useState } from "react";
import { User, Lock, UserCircle2 } from "lucide-react";

export default function LoginPage() {
  const [role, setRole] = useState("student");
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Logging in as ${role} with email: ${formData.email}`);
  };

  const roles = ["student", "teacher", "parent", "admin"];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white px-4">
      <div className="bg-white rounded-xl shadow-md w-full max-w-md p-8">
        <div className="text-center mb-6">
          <UserCircle2 className="w-12 h-12 text-blue-600 mx-auto" />
          <h1 className="text-xl font-semibold text-gray-800 mt-3">
            SSM Alekhapada
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Please sign in to continue
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {roles.map((r) => (
            <button
              key={r}
              onClick={() => setRole(r)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${
                role === r
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-blue-100"
              }`}
            >
              {r.charAt(0).toUpperCase() + r.slice(1)}
            </button>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <User className="absolute left-3 top-3.5 w-4 h-4 text-gray-400" />
            <input
              type="email"
              name="email"
              placeholder={
                role === "student"
                  ? "Student email"
                  : role === "teacher"
                  ? "Teacher email"
                  : role === "parent"
                  ? "Parent email"
                  : "Admin email"
              }
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full pl-10 pr-3 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-3 top-3.5 w-4 h-4 text-gray-400" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              value={formData.password}
              onChange={handleChange}
              className="w-full pl-10 pr-3 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        <div className="text-center mt-4">
          <a href="#" className="text-sm text-blue-600 hover:underline">
            Forgot password?
          </a>
        </div>
      </div>

      <p className="text-gray-500 text-xs mt-6">
        © {new Date().getFullYear()} SSM Alekhapada. All rights reserved.
      </p>
    </div>
  );
}
