import React from 'react';
import { FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { SlSocialFacebook } from 'react-icons/sl';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="container max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          <div>
            <a>
                <img src="/logo.jpg" alt="logo"
                className="h-16 w-auto mb-6" />
            </a>
            <p className="text-gray-400 text-sm leading-relaxed">
              We help ambitious businesses scale through data-driven digital marketing and custom strategies.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col space-y-2 text-sm">
              <a href="#about" className="hover:text-blue-400 transition-colors">About Us</a>
              <a href="#services" className="hover:text-blue-400 transition-colors">Services</a>
              <a href="#cases" className="hover:text-blue-400 transition-colors">Protfolio</a>
              <a href="#testimonials" className="hover:text-blue-400 transition-colors">Testimonial</a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <div className="flex flex-col space-y-2 text-sm">
              <a href="#services" className="hover:text-blue-400 transition-colors">Search Engine Optimization</a>
              <a href="#services" className="hover:text-blue-400 transition-colors">Pay-Per-Click Ads</a>
              <a href="#services" className="hover:text-blue-400 transition-colors">Social Media Marketing</a>
              <a href="#services" className="hover:text-blue-400 transition-colors">Content Strategy</a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <div className="flex flex-col space-y-2 text-sm text-gray-400">
              <p>Email: nextgendigital@.com</p>
              <p>Phone: +88-100020011</p>
              <p>Location: Uttara, Dhaka, Bangladesh</p>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-base text-gray-500 gap-4">
          <p>© 2026 Next Gen Studio. All rights reserved.</p>
          <div className="flex items-center gap-4">

            <a 
            href="#" 
            className="w-11 h-11 flex items-center justify-center rounded-full bg-slate-700 text-gray-200 hover:bg-green-500 hover:text-white transition duration-300">
            <FaWhatsapp className="text-base" />
            </a>

            <a 
            href="#" 
            className="w-11 h-11 flex items-center justify-center rounded-full bg-slate-700 text-gray-200 hover:bg-green-500 hover:text-white transition duration-300">
           <SlSocialFacebook className="text-base" />

            </a>
            <a
              href="#"
              className="w-11 h-11 flex items-center justify-center rounded-full bg-slate-700 text-gray-200 hover:bg-green-500 hover:text-white transition duration-300">
                <FaInstagram className="text-base" />
            </a>
            <a href="#"
             className="w-11 h-11 flex items-center justify-center rounded-full bg-slate-700 text-gray-200 hover:bg-green-500 hover:text-white transition duration-300">
               <FaLinkedin className="text-base" />
            </a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
