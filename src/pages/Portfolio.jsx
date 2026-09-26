

import { FaLaptopCode, FaMobileAlt, FaShoppingCart } from 'react-icons/fa';
import PortfolioCard from '../components/ui/PortfolioCard';
import CTA from '../components/home/CTA';


const portfolioData = [
  {
     id: 1,
     icon:  <FaLaptopCode />,
     title: "Business Website",
     category: 'Web Development',
     description: "A modern and responsive business website designed to build a strong online presence",
     button: "click"
  },
  {
     id: 1,
     icon:  <FaMobileAlt />,
     title: " Mobile App Design",
     category: ' UI/UX Design',
     description: "A clean and user-friendly mobile interface designed for a smooth user experience",
     button: "click"
  },
  {
     id: 1,
     icon: <FaShoppingCart />,
     title: "Online Store",
     category: 'E-Commerce',
     description: "A modern e-commerce website with a simple responsive and user-friendly shopping experience",
     button: "click"
  },
  {
    id: 1,
     icon: <FaLaptopCode />,
     title: " Management System",
     category: 'Web Application',
     description: "A responsive web application designed to manage business data efficiently",
     button: "click"
  }

];

const Portfolio = () => {
  return (
    <main>
         <section className="bg-blue-100 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-600 text-2xl font-semibold mb-3">
            Our Portfolio
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            Our  <span className="text-blue-600">Recent Projects</span>
          </h1>

          <p className="max-w-2xl mx-auto mt-4 text-gray-600 leading-7">
            Explore some of our recent projects and digital solutions
            created for modern businesses.
          </p>
        </div>
        <div className="flex justify-center">
            <img src="/portfolio.jpg" alt=""
              className="w-70 h-70 mt-8 rounded-2xl" />
        </div>
      </section>

     <section className="bg-slate-300 py-20">
       <div className="container max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            Featured <span className="text-blue-600">Projects</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mt-4">
            A selection of websites and digital solutions developed by NextGen Digital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.map((item) => (
            <PortfolioCard
              key={item.id}
              icon={item.icon}
              title={item.title}
              category={item.category}
              description={item.description}
              button={item.button}
            />
          ))}
        </div>

      </div>
    </section>

    <section className="py-16 sm:py-20 bg-blue-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            Our <span className="text-blue-600">Approach</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mt-4">
            We focus on creating digital experiences that are simple, modern and effective.
          </p>
        </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900">
                Clean Design
              </h3>

              <p className="mt-3 text-gray-600 leading-6">
                We create clean and attractive designs that are
                easy for users to understand.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900">
                Modern Technology
              </h3>

              <p className="mt-3 text-gray-600 leading-6">
                We use modern web technologies to build reliable
                and scalable digital solutions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900">
                User Focused
              </h3>

              <p className="mt-3 text-gray-600 leading-6">
                We focus on creating smooth and user-friendly
                digital experiences.
              </p>
            </div>
          </div>
        </div>
      </section>
      <CTA />
    </main>
  );
};

export default Portfolio;
