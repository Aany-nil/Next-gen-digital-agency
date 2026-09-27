
import { FaQuoteLeft } from "react-icons/fa";
import CTA from "../components/home/CTA";
import TestCard from "../components/ui/TestCard";

const testimonialData = [
  {
    id: 1,
    icon: <FaQuoteLeft />,
    name: "John Doe",
    role: "Business Owner",
    rating: 5,
    testimonial:
      "NextGen Digital helped us create a modern and professional website for our business. We are very happy with the result.",
    avatar: "/client1.jpg",
  },

  {
    id: 2,
    icon: <FaQuoteLeft />,
    name: "Sarah Smith",
    role: "Marketing Manager",
    rating: 5,
    testimonial:
      "The team understood our requirements and delivered a clean and user-friendly website. The overall experience was great.",
    avatar: "/client2.jpg",
  },

  {
    id: 3,
    icon: <FaQuoteLeft />,
    name: "Michael Brown",
    role: "Entrepreneur",
    rating: 5,
    testimonial:
      "We received a professional digital solution that helped improve our online presence and customer experience.",
    avatar: "/client3.jpg",
  },

  {
    id: 4,
    icon: <FaQuoteLeft />,
    name: "Emily Wilson",
    role: "Business Owner",
    rating: 5,
    testimonial:
      "The design was modern, responsive and easy to use. NextGen Digital made the whole process simple for us.",
    avatar: "/client4.jpg",
  },

  {
    id: 5,
    icon: <FaQuoteLeft />,
    name: "David Miller",
    role: "Company Director",
    rating: 5,
    testimonial:
      "We really liked the quality of the website and the attention to detail. The final result matched our expectations.",
    avatar: "/client5.jpg",
  },

  {
    id: 6,
    icon: <FaQuoteLeft />,
    name: "Jessica Taylor",
    role: "Startup Founder",
    rating: 5,
    testimonial:
      "NextGen Digital provided a simple and effective digital solution for our startup. We are satisfied with their work.",
    avatar: "/client6.jpg",
  },
];

const Testimonials = () => {
  return (
    <main>

      <section className="relative overflow-hidden bg-blue-50 py-16 sm:py-20 lg:py-24">

        <div className=" container absolute -left-20 top-20 w-60 h-60 bg-blue-100 rounded-full opacity-60"></div>

           <div className="absolute -right-20 -top-20 w-72 h-72 bg-blue-100 rounded-full opacity-60"></div>

             <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <p className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-sm sm:text-base font-semibold">
            Testimonials
          </p>

          <h1 className="mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            What Our{" "}
            <span className="text-blue-600">
              Clients Say
            </span>
          </h1>

          <p className="max-w-2xl mx-auto mt-5 text-sm sm:text-base md:text-lg text-gray-600 leading-7">
            See what our clients say about their experience
            working with NextGen Digital.
          </p>

          <div className="relative max-w-3xl mx-auto mt-10">

            <img
              src="/testimonial.jpg"
              alt="Client testimonials"
              className="w-full h-64 sm:h-80 object-cover rounded-3xl shadow-xl"
            />

            <div className="hidden sm:block absolute -left-5 top-1/2 -translate-y-1/2 bg-white px-5 py-4 rounded-2xl shadow-lg text-left">
              <div className="text-2xl text-blue-500">
                <FaQuoteLeft />
              </div>

              <p className="text-sm text-gray-600 mt-2">
                Great service
                <br />
                and support!
              </p>
            </div>

            <div className="hidden sm:block absolute -right-5 top-1/2 -translate-y-1/2 bg-white px-5 py-4 rounded-2xl shadow-lg">

              <div className="flex gap-1 text-yellow-400 text-sm">
                ★ ★ ★ ★ ★
              </div>

              <p className="text-sm text-gray-600 mt-2">
                Happy Clients
              </p>

            </div>

          </div>

        </div>
      </section>

      <section className="bg-gray-50 py-16 sm:py-20 lg:py-24">

        <div className=" container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">

            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Client{" "}
              <span className="text-blue-600">
                Testimonials
              </span>
            </h2>

            <p className="mt-4 text-gray-600 text-sm sm:text-base md:text-lg leading-7">
              Feedback from clients who trusted NextGen Digital
              with their digital projects.
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

            {testimonialData.map((item) => (
              <TestCard
                key={item.id}
                icon={item.icon}
                name={item.name}
                role={item.role}
                rating={item.rating}
                testimonial={item.testimonial}
                avatar={item.avatar}
              />
            ))}

          </div>

        </div>
      </section>

      <section className="bg-blue-50 py-16 sm:py-20 lg:py-24">

        <div container className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-12">

            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Why Clients{" "}
              <span className="text-blue-600">
                Trust Us
              </span>
            </h2>

            <p className="mt-4 text-gray-600 text-sm sm:text-base leading-7">
              We focus on quality, communication and creating
              solutions that meet our clients' needs.
            </p>

          </div>


          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="bg-white p-7 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300">

              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 text-xl">
                ✓
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mt-5">
                Quality Work
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                We focus on delivering high-quality and
                professional digital solutions for every project.
              </p>

            </div>

            <div className="bg-white p-7 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300">

              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 text-xl">
                💬
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mt-5">
                Clear Communication
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                We communicate clearly with clients throughout
                the project to understand their requirements.
              </p>

            </div>

            <div className="bg-white p-7 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300">

              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 text-xl">
                ♡
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mt-5">
                Customer Satisfaction
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                We aim to create useful, reliable and
                user-friendly solutions that satisfy our clients.
              </p>

            </div>

          </div>

        </div>
      </section>

      <CTA />

    </main>
  );
};

export default Testimonials;