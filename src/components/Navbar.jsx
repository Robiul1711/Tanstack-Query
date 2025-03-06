import { useState } from "react";
import { Link } from "react-router-dom"; // For navigation if using React Router

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-blue-500 p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white font-bold text-2xl">
          <Link to="/">MyApp</Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-white hover:text-gray-300">Home</Link>
          <Link to="/about" className="text-white hover:text-gray-300">About</Link>
          <Link to="/services" className="text-white hover:text-gray-300">Services</Link>
          <Link to="/contact" className="text-white hover:text-gray-300">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={toggleMenu}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"} mt-4`}>
        <Link to="/" className="block text-white py-2 hover:bg-blue-600">Home</Link>
        <Link to="/about" className="block text-white py-2 hover:bg-blue-600">About</Link>
        <Link to="/services" className="block text-white py-2 hover:bg-blue-600">Services</Link>
        <Link to="/contact" className="block text-white py-2 hover:bg-blue-600">Contact</Link>
      </div>
    </nav>
  );
}
