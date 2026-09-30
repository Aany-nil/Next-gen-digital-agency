import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaHome } from 'react-icons/fa';

const Success = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-lg text-center max-w-md w-full border border-gray-100">
        <div className="flex justify-center mb-5">
          <FaCheckCircle className="text-green-500 text-6xl animate-bounce" />
        </div>
        
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Thank You!
        </h1>
        
        <p className="text-gray-600 mb-6 leading-relaxed">
          Your message has been sent successfully. We will review your inquiry and get back to you soon.
        </p>

        <Link
          to="/"
          className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition duration-300 shadow-md w-full"
        >
          <FaHome /> Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Success;