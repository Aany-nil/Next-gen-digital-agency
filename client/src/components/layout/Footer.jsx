import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaLinkedin, FaWhatsapp, FaTimes, FaExternalLinkAlt } from 'react-icons/fa';
import { SlSocialFacebook } from 'react-icons/sl';

const Footer = () => {
  const [activeSocial, setActiveSocial] = useState(null);
  const socialLinks = {
    whatsapp: {
      name: 'WhatsApp',
      handle: '+880 100020011',
      url: 'https://wa.me/880100020011',
      color: 'bg-green-500',
    },
    facebook: {
      name: 'Facebook',
      handle: 'NextGen Digital Official',
      url: 'https://facebook.com',
      color: 'bg-blue-600',
    },
    instagram: {
      name: 'Instagram',
      handle: '@nextgendigital',
      url: 'https://instagram.com',
      color: 'bg-pink-600',
    },
    linkedin: {
      name: 'LinkedIn',
      handle: 'NextGen Digital Agency',
      url: 'https://linkedin.com',
      color: 'bg-blue-700',
    },
  };

  const openModal = (platform) => {
    setActiveSocial(socialLinks[platform]);
  };

  const closeModal = () => {
    setActiveSocial(null);
  };

  return (
    <footer className="bg-gray-900 text-gray-300 py-16 relative">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link to="/">
              <img
                src="/logo.jpg"
                alt="logo"
                className="h-16 w-auto mb-6 object-contain"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              We help ambitious businesses scale through data-driven digital marketing and custom strategies.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col space-y-2 text-sm">
              <Link to="/" className="hover:text-blue-400 transition-colors">Home</Link>
              <Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link>
              <Link to="/services" className="hover:text-blue-400 transition-colors">Services</Link>
              <Link to="/portfolio" className="hover:text-blue-400 transition-colors">Portfolio</Link>
              <Link to="/testimonial" className="hover:text-blue-400 transition-colors">Testimonials</Link>
              <Link to="/contact" className="hover:text-blue-400 transition-colors">Contact Us</Link>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <div className="flex flex-col space-y-2 text-sm">
              <Link to="/services" className="hover:text-blue-400 transition-colors">Search Engine Optimization</Link>
              <Link to="/services" className="hover:text-blue-400 transition-colors">Pay-Per-Click Ads</Link>
              <Link to="/services" className="hover:text-blue-400 transition-colors">Social Media Marketing</Link>
              <Link to="/services" className="hover:text-blue-400 transition-colors">Content Strategy</Link>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <div className="flex flex-col space-y-2 text-sm text-gray-400">
              <p>Email: nextgendigital@.com</p>
              <p>Phone: +880 100020011</p>
              <p>Location: Uttara, Dhaka, Bangladesh</p>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
          <p>© 2026 Next Gen Studio. All rights reserved.</p>

          <div className="flex items-center gap-4">
            <button
              onClick={() => openModal('whatsapp')}
              className="w-11 h-11 flex items-center justify-center rounded-full bg-slate-800 text-gray-200 hover:bg-green-500 hover:text-white transition duration-300 focus:outline-none"
              title="WhatsApp"
            >
              <FaWhatsapp className="text-lg" />
            </button>

            <button
              onClick={() => openModal('facebook')}
              className="w-11 h-11 flex items-center justify-center rounded-full bg-slate-800 text-gray-200 hover:bg-blue-600 hover:text-white transition duration-300 focus:outline-none"
              title="Facebook"
            >
              <SlSocialFacebook className="text-lg" />
            </button>

            <button
              onClick={() => openModal('instagram')}
              className="w-11 h-11 flex items-center justify-center rounded-full bg-slate-800 text-gray-200 hover:bg-pink-600 hover:text-white transition duration-300 focus:outline-none"
              title="Instagram"
            >
              <FaInstagram className="text-lg" />
            </button>

            <button
              onClick={() => openModal('linkedin')}
              className="w-11 h-11 flex items-center justify-center rounded-full bg-slate-800 text-gray-200 hover:bg-blue-700 hover:text-white transition duration-300 focus:outline-none"
              title="LinkedIn"
            >
              <FaLinkedin className="text-lg" />
            </button>
          </div>
        </div>
      </div>
      {activeSocial && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white text-gray-900 rounded-2xl p-6 max-w-sm w-full shadow-2xl relative border border-gray-100">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-xl focus:outline-none"
            >
              <FaTimes />
            </button>

            <div className="text-center">
              <div className={`w-16 h-16 ${activeSocial.color} text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md`}>
                {activeSocial.name === 'WhatsApp' && <FaWhatsapp className="text-3xl" />}
                {activeSocial.name === 'Facebook' && <SlSocialFacebook className="text-3xl" />}
                {activeSocial.name === 'Instagram' && <FaInstagram className="text-3xl" />}
                {activeSocial.name === 'LinkedIn' && <FaLinkedin className="text-3xl" />}
              </div>

              <h3 className="text-xl font-bold mb-1">{activeSocial.name}</h3>
              <p className="text-sm text-gray-500 mb-6">{activeSocial.handle}</p>

              <a
                href={activeSocial.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-2 ${activeSocial.color} hover:opacity-90 text-white font-semibold px-6 py-3 rounded-xl w-full transition duration-300`}
              >
                Visit Page <FaExternalLinkAlt className="text-xs" />
              </a>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;