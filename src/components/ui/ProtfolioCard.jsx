import React from 'react';

const ProtfolioCard = ({ client, category, challenge, timeline, metrics }) => {
  return (
    <div className="bg-slate-50/60 p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold text-gray-900">{client}</h3>
          <span className="text-emerald-500 font-bold">↗</span>
        </div>
        
        <p className="text-gray-500 text-sm mt-1">{category}</p>
        <p className="text-gray-500 text-sm">{challenge}</p>
        <div className="mt-8 space-y-4 text-sm">
          {metrics.map((metric, idx) => (
            <div key={idx} className="flex justify-between">
              <span className="text-gray-600">{metric.label}</span>
              <span className="text-emerald-500 font-semibold">{metric.value}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10 pt-4 text-xs text-gray-400">
        {timeline}
      </div>
    </div>
  );
};

export default ProtfolioCard;
