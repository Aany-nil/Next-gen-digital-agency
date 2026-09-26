import React from 'react';
import Button from './Button';


const PortfolioCard = ({ title, category, description, icon, button }) => {
  return (
    <div className="bg-slate-50/60 p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
      <div>
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-900 to-emerald-200 flex items-center justify-center text-white mb-6 shadow-lg shadow-blue-700/20">
        {icon}
      </div>
      <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        </div>
        <h4 className="text-gray-900 text-base mt-2">{category}</h4>
        <p className="text-gray-500 text-sm">{description}</p>
        <div className="mt-8">
        <Button variant="green">{button}</Button>
      </div>    
      </div>
    </div>
  );
};

export default PortfolioCard;
