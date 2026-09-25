import React from 'react';

const TestimonialCard = ({ quote, name, role, avatar }) => {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
      {/* Review Text */}
      <p className="text-gray-600 italic">
        "{quote}"
      </p>

      {/* Client Info */}
      <div className="flex items-center gap-4 mt-6 pt-4 border-t border-gray-100">
        <img 
          src={avatar} 
          alt={name} 
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h4 className="font-bold text-gray-900">{name}</h4>
          <p className="text-gray-500 text-sm">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;