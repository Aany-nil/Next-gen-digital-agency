import { FaStar } from "react-icons/fa";

const TestCard = ({
  icon,
  name,
  role,
  rating,
  testimonial,
  avatar,
}) => {
  return (
    <div className="group bg-white p-6 sm:p-7 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

      <div className="flex items-start justify-between gap-4">
        <div className="text-3xl text-blue-400">
          {icon}
        </div>

        <div className="flex gap-1 text-yellow-400 text-sm">
          {Array.from({ length: rating }).map((_, index) => (
            <FaStar key={index} />
          ))}
        </div>

      </div>

      <p className="mt-5 text-gray-600 italic leading-7">
        "{testimonial}"
      </p>
      <div className="flex items-center gap-4 mt-6 pt-5 border-t border-gray-100">

        <img
          src={avatar}
          alt={name}
          className="w-12 h-12 rounded-full object-cover border-2 border-blue-100"
        />

        <div>
          <h4 className="font-semibold text-gray-900">
            {name}
          </h4>

          <p className="text-sm text-gray-500 mt-1">
            {role}
          </p>
        </div>

      </div>

    </div>
  );
};

export default TestCard;