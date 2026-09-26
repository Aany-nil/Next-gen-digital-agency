import { CiMobile3 } from "react-icons/ci";
import { FaBullhorn, FaLaptop, FaPaintBrush, FaSearch, FaShoppingCart } from "react-icons/fa";
import Card from "../components/ui/Card";
import CTA from "../components/home/CTA";

const servicesCard = [
    {
        id:1,
        icon: <FaLaptop/>,
        title: "Web Development",
        description: "We build modern, responsive and use friendly websites for buisness and organizations"
    },
    {
        id:2,
        icon: <CiMobile3 />,
        title: " Responsive Design",
        description: "We create website that work smootly on mobile, tablet and desktop device"
    },
    {
        id:3,
        icon: <FaPaintBrush />,
        title: " UI/UX Design",
        description: "We design clean and attractive user interfaces with a focus on user experiences"
    },
    {
        id:4,
        icon: <FaBullhorn />,
        title: "Digital Marketing",
        description: "We help buisness improve their online reach through effective digital marketing strategies"
    },
    {
        id:5,
        icon:  <FaSearch />,
        title: "SEO Optimization",
        description: "We Optimize websites to improve visibility and help buisness reach their target audience"
    },
    {
        id:6,
        icon: <FaShoppingCart />,
        title: "E-Commerce Development",
        description: "We develop user-friendly online stores with modern features and responsive layouts"
    }
]

const Services = () => {
  return (
    <div>
        <section className="bg-green-50 py-16 sm:py-20">
            <div className="container max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p className="text-blue-600 text-2xl font-semibold mb-3">Our Services</p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
                    Digital  <span className="text-blue-600">Solution For Your Buisness</span>
                </h1>
                <p className="max-w-2xl mx-auto text-gray-600 mt-4">
                    We provide modern digital services to help businesses
                  build their online presence and achieve their goals.</p>
            </div>
        </section>

        <section className="bg-white py-16 sm:py-20">
            <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div>
                    <h2 className="text-3xl md:text-3xl font-bold text-gray-900 text-center">
                        What  <span className="text-blue-600">We Offer</span></h2>
                    <p className="max-w-3xl mx-auto text-center text-gray-500 mt-4">
                    Explore our professional digital services designed for modern businesses.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                    {servicesCard.map((item) => (
                        <Card
                        key={item.id}
                        icon={item.icon}
                        title={item.title}
                        description={item.description}
                        />
                    ))}
                </div>
            </div>
        </section>

        <section className="bg-gray-100 py-16 sm:py-20">
            <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div>
                    <h2 className="text-3xl md:text-3xl font-bold text-gray-900 text-center">
                        How  <span className="text-blue-600">We Work</span></h2>
                    <p className="max-w-3xl mx-auto text-center text-gray-500 mt-4">
                    Our simple process help us deliver effective digital solution
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">

                  <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center">
                      <div className="w-12 h-12 mx-auto bg-blue-50 text-blue-600 rounded-full flex items-center justify-center font-bold text-lg ">
                        01
                      </div>
                      <h3 className="text-lg font-semibold mt-5">Understand</h3>
                      <p classname="mt-3 text-sm text-gray-600">We understand your business and project requirements</p>
                 </div>
                 <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center">
                      <div className="w-12 h-12 mx-auto bg-blue-50 text-blue-600 rounded-full flex items-center justify-center font-bold text-lg ">
                        02
                      </div>
                      <h3 className="text-lg font-semibold mt-5">Plan</h3>
                      <p classname="mt-3 text-sm text-gray-600">We create a clear plan and structure for the project</p>
                 </div>
                 <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center">
                      <div className="w-12 h-12 mx-auto bg-blue-50 text-blue-600 rounded-full flex items-center justify-center font-bold text-lg ">
                        03
                      </div>
                      <h3 className="text-lg font-semibold mt-5">Develop</h3>
                      <p classname="mt-3 text-sm text-gray-600"> We develop the solution using modern technologies</p>
                 </div>
                 <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center">
                      <div className="w-12 h-12 mx-auto bg-blue-50 text-blue-600 rounded-full flex items-center justify-center font-bold text-lg ">
                        01
                      </div>
                      <h3 className="text-lg font-semibold mt-5">Deliver</h3>
                      <p classname="mt-3 text-sm text-gray-600">We test and deliver a polished final solution</p>
                 </div>
                </div>
            </div>
        </section>
        <CTA />
    </div>
  )
}

export default Services;
