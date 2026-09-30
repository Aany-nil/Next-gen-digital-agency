import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import Button from '../ui/Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link to="/" onClick={closeMenu}>
            <img 
              src="/logo.jpg" 
              alt="logo" 
              className="h-16 w-auto object-contain" 
            />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-8">
              <li>
                <Link 
                  to="/" 
                  className="text-gray-900 font-medium hover:text-blue-600 transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="text-gray-900 font-medium hover:text-blue-600 transition"
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className="text-gray-900 font-medium hover:text-blue-600 transition"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  to="/portfolio" 
                  className="text-gray-900 font-medium hover:text-blue-600 transition"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link 
                  to="/testimonial" 
                  className="text-gray-900 font-medium hover:text-blue-600 transition"
                >
                  Testimonial
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-gray-900 font-medium hover:text-blue-600 transition"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Button to="/request-quote" variant="green">
                  Get Started
                </Button>
              </li>
            </ul>
          </div>

          {/* Mobile Hamburger Icon */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-900 text-2xl focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

        </div>
      </div>

      {/* Overlay for Mobile Sidebar */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Sidebar Menu */}
      <div 
        className={`fixed top-0 right-0 h-full w-64 bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center p-6 border-b border-gray-100">
          <span className="font-bold text-gray-900 text-lg">Menu</span>
          <button 
            onClick={toggleMenu} 
            className="text-gray-900 text-xl focus:outline-none"
          >
            <FaTimes />
          </button>
        </div>

        <div className="px-6 py-6">
          <ul className="flex flex-col gap-5">
            <li>
              <Link 
                to="/" 
                onClick={closeMenu} 
                className="block text-gray-900 font-medium hover:text-blue-600 transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                onClick={closeMenu} 
                className="block text-gray-900 font-medium hover:text-blue-600 transition"
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                to="/services" 
                onClick={closeMenu} 
                className="block text-gray-900 font-medium hover:text-blue-600 transition"
              >
                Services
              </Link>
            </li>
            <li>
              <Link 
                to="/portfolio" 
                onClick={closeMenu} 
                className="block text-gray-900 font-medium hover:text-blue-600 transition"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link 
                to="/testimonial" 
                onClick={closeMenu} 
                className="block text-gray-900 font-medium hover:text-blue-600 transition"
              >
                Testimonial
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                onClick={closeMenu} 
                className="block text-gray-900 font-medium hover:text-blue-600 transition"
              >
                Contact
              </Link>
            </li>
            <li className="pt-4 border-t border-gray-100">
              <Button to="/request-quote" variant="green" onClick={closeMenu}>
                Get Started
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;