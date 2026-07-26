import { Link } from "react-router";
import { Facebook, Instagram, Youtube, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-blue-700 text-white mt-10 z-100">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-xl font-bold mb-3">SSVM Alekhapada</h2>
          <p className="text-gray-200 text-sm leading-relaxed">
            A complete online school management system designed to simplify
            learning and administration — connecting Guardians, Teachers, and
            Administration seamlessly.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-3">Quick Links</h2>
          <ul className="space-y-2 text-gray-200">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/home/about" className="hover:underline">About Us</Link></li>
            <li><Link to="/home/features" className="hover:underline">Features</Link></li>
            <li><Link to="/gallery" className="hover:underline">Gallery</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-3">Contact Us</h2>
          <p className="text-gray-200 text-sm">
            📍 Sharada Shishu Mandir, Alekhapada,<br />
            Raikala, Keonjhar, Odisha, India<br />
            📞 +91 099376 09144<br />
            ✉️ ssmalekhapada@gmail.com
          </p>

          <div className="flex space-x-5 mt-5">
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-transform duration-300 hover:scale-110">
              <Instagram size={22} />
            </a>
            <a href="https://www.facebook.com/ssmalekhapada/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-transform duration-300 hover:scale-110">
              <Facebook size={22} />
            </a>
            <a href="https://www.youtube.com/channel/UCsTSq16deDyo4Khlpe-CrOg" target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition-transform duration-300 hover:scale-110">
              <Youtube size={22} />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-sky-300 transition-transform duration-300 hover:scale-110">
              <Twitter size={22} />
            </a>
          </div>
        </div>
      </div>

      <div className="bg-blue-900 text-center py-3 text-sm text-gray-300">
        © {new Date().getFullYear()} SSVM, Alekhapada — All rights reserved.
      </div>
    </footer>
  );
}
