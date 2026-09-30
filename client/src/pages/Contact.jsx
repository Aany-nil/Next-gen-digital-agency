import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://next-gen-digital-agency-sekt.vercel.app/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });

        navigate("/success");
      } else {
        toast.error("Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <main className="bg-gray-200">
      <ToastContainer position="top-right" autoClose={3000} />

      <section className="bg-blue-50 py-20">
        <div className="container max-w-7xl mx-auto px-6 text-center">
          <p className="text-blue-600 font-semibold uppercase tracking-wider mb-3">
            Contact Us
          </p>

          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Let's Work{" "}
            <span className="text-blue-600">Together Friendly</span>
          </h1>

          <p className="mt-5 max-w-2xl mx-auto text-gray-600 leading-7">
            Have a project in mind? We'd love to hear about it. Get in touch with
            NextGen Digital and let's create something amazing together.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-300">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-bold text-gray-900">Get In Touch</h2>

              <p className="mt-4 text-gray-600 leading-7">
                Whether you have a question, want to start a project, or simply
                want to say hello, feel free to contact us.
              </p>

              <div className="flex items-start gap-4 mt-8">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <FaEnvelope />
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600 mt-1">nextgendigital@.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 mt-6">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-green-50 text-green-600">
                  <FaPhoneAlt />
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">Phone</h3>
                  <p className="text-gray-600 mt-1">+880 100020011</p>
                </div>
              </div>

              <div className="flex items-start gap-4 mt-6">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">Location</h3>
                  <p className="text-gray-600 mt-1">
                    Uttara, Dhaka, Bangladesh
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 mt-6">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-green-50 text-green-600">
                  <FaClock />
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">
                    Working Hours
                  </h3>
                  <p className="text-gray-600 mt-1">
                    Sat - Thu: 9:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900">
                  Send Us a Message
                </h2>

                <p className="mt-2 text-gray-500">
                  Fill out the form below and we'll get back to you soon.
                </p>

                <form onSubmit={handleSubmit} className="mt-8">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name
                      </label>

                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>

                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
                        required
                      />
                    </div>
                  </div>

                  <div className="mt-5">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>

                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What is your project about?"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
                      required
                    />
                  </div>

                  <div className="mt-5">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>

                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="6"
                      placeholder="Tell us about your project..."
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 outline-none resize-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="mt-6 inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-7 py-3 rounded-lg transition duration-300"
                  >
                    Send Message
                    <FaArrowRight className="text-sm" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-blue-600 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Ready to Start Your Project?
          </h2>

          <p className="mt-4 text-blue-100 max-w-2xl mx-auto">
            Let's turn your ideas into a powerful digital experience. Contact
            NextGen Digital today.
          </p>

          <button className="mt-7 inline-flex items-center gap-2 bg-white text-blue-600 font-semibold px-7 py-3 rounded-lg hover:bg-gray-300 transition duration-300">
            Request a Quote
            <FaArrowRight />
          </button>
        </div>
      </section>
    </main>
  );
};

export default Contact;