import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Camera, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black border-b border-red-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center space-x-2 hover-glow">
            <Camera className="h-8 w-8 text-red-600" />
            <span className="text-xl font-bold text-white">
              Codec Multimedia
            </span>
          </Link>

          {/* Botón de menú hamburguesa */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="w-8 h-8 text-red-600" />
            ) : (
              <Menu className="w-8 h-8 text-red-600" />
            )}
          </button>

          {/* Menú en pantallas grandes */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className="text-white hover:text-red-500 transition-colors duration-300"
            >
              Inicio
            </Link>
            <Link
              to="/about"
              className="text-white hover:text-red-500 transition-colors duration-300"
            >
              Nosotros
            </Link>
            <Link
              to="/blog"
              className="text-white hover:text-red-500 transition-colors duration-300"
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="text-white hover:text-red-500 transition-colors duration-300"
            >
              Contacto
            </Link>
          </div>
        </div>
      </div>

      {/* Menú desplegable en pantallas pequeñas */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-red-600 p-4">
          <Link
            to="/"
            className="block text-white py-2 hover:text-red-500"
            onClick={() => setIsOpen(false)}
          >
            Inicio
          </Link>
          <Link
            to="/about"
            className="block text-white py-2 hover:text-red-500"
            onClick={() => setIsOpen(false)}
          >
            Nosotros
          </Link>
          <Link
            to="/blog"
            className="block text-white py-2 hover:text-red-500"
            onClick={() => setIsOpen(false)}
          >
            Blog
          </Link>
          <Link
            to="/contact"
            className="block text-white py-2 hover:text-red-500"
            onClick={() => setIsOpen(false)}
          >
            Contacto
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
