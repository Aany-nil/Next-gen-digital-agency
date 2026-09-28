
import Button from './Button';

const Card = ({ icon, title, description, buttonText = "Learn More" }) => {
  return (
    <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-emerald-400 flex items-center justify-center text-white mb-6 shadow-lg shadow-blue-500/20">
        {icon}
      </div>

      <h3 className="text-xl md:text-2xl font-bold text-gray-900">{title}</h3>

      <p className="text-gray-600 text-base leading-relaxed mt-4">
        {description}
      </p>

      <div className="mt-8">
        <Button variant="green">{buttonText}</Button>
      </div>
    </div>
  );
};

export default Card;
