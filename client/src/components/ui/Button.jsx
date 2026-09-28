
import { Link } from "react-router-dom";

const Button = ({ children, to, variant = "blue" }) => {
  const baseStyle =
    "inline-block px-5 py-3 rounded-lg font-semibold transition";

  const variants = {
    blue:
      "bg-blue-600 text-white hover:bg-blue-700",

    green:
      "bg-green-500 text-white hover:bg-green-600 transition",
    white: 
      "bg-white text-blue-600 border border-blue-600 hover:bg-blue-50"
  };

  return (
    <Link
      to={to}
      className={`${baseStyle} ${variants[variant]}`}
    >
      {children}
    </Link>
  );
};

export default Button;

