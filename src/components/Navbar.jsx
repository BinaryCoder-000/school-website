import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/public/images/white_logo.jpeg";

export default function Navbar({ setShowCalendar, showCalendar }) {
  const [mobileMenu, setMobileMenu] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <nav className="bg-blue-600 text-white fixed top-0 left-0 w-full z-50 shadow">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center h-20">
          <div
            className={`flex items-center gap-3 ${
              isHomePage ? "" : "pl-3 sm:pl-4"
            }`}
          >
            {isHomePage && (
              <button
                onClick={() => setShowCalendar(!showCalendar)}
                className="rounded hover:bg-blue-700 transition"
              >
                <Menu />
              </button>
            )}

            <Link to="/" className="flex items-center">
              <img src={logo} className="h-15 w-15 rounded-full" />
              <h1 className="ml-3 text-base sm:text-xl font-semibold">
                SSM Alekhapada
              </h1>
            </Link>
          </div>

          <div className="hidden md:flex space-x-6 text-lg">
            <Link to="/" className="hover:text-gray-200">Home</Link>
            <Link to="/home/about" className="hover:text-gray-200">About Us</Link>
            <Link to="/home/features" className="hover:text-gray-200">Features</Link>
            <Link to="/home/loginpage" className="hover:text-gray-200">Login</Link>
          </div>

          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="md:hidden p-2 rounded hover:bg-blue-700 transition"
          >
            {mobileMenu ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {mobileMenu && (
        <div className="md:hidden bg-blue-700 px-4 py-4 space-y-3 text-lg">
          <Link onClick={() => setMobileMenu(false)} to="/" className="block">Home</Link>
          <Link onClick={() => setMobileMenu(false)} to="/home/about" className="block">About Us</Link>
          <Link onClick={() => setMobileMenu(false)} to="/home/features" className="block">Features</Link>
          <Link onClick={() => setMobileMenu(false)} to="/home/loginpage" className="block">Login</Link>
        </div>
      )}
    </nav>
  );
}
