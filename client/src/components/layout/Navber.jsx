import React from 'react'
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const Navber = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
        <Link to="/">
             <img src="/logo.jpg" 
             alt="logo" 
             className="h-16 w-auto" />
        </Link>
        <div>
          <ul className="flex items-center gap-8">
            <li>
              <Link 
                to="/"
                className="text-gray-900 front-medium hover:text-blue-600 transition">
                  Home
               </Link>
            </li>
            <li>
              <Link 
                 to="/about"
                 className="text-gray-900 front-medium hover:text-blue-600 transition">     
                  About
                </Link>
            </li>
            <li>
              <Link 
              to="/services"
              className="text-gray-900 front-medium hover:text-blue-600 transition">
                Services
              </Link>
            </li>
            <li>
              <Link 
              to="/portfolio"
              className="text-gray-900 front-medium hover:text-blue-600 transition">
                Portfolio
              </Link>
            </li>
            <li>
              <Link 
              to="/testimonial"
              className="text-gray-900 front-medium hover:text-blue-600 transition">
                Testimonial
              </Link>
            </li>
            <li>
              <Link to="/contact"
              className="text-gray-900 front-medium hover:text-blue-600 transition">
                Contact
              </Link>
            </li>
            <li>
              <Button to="/request-quote" variant="green">Get Started</Button>
            </li>
          </ul>
        </div>
        </div>
      </div>
    </nav>
  )
}

export default Navber;
