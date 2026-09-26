import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'
import Button from '../components/ui/Button'
import AboutCard from '../components/ui/AboutCard'
import CTA from '../components/home/CTA'

const aboutCard = [
    {
        id:1,
        title: " Modern Technology",
        description: "We use modern technology to build reliable solutions."
    },
    {
       id:2,
       title: " Responsive Design",
       description: "Our websites work smoothly on all devices." 
    },
    {
      id:3,
      title: " Clean Development",
      description: "We focus on clean and organized development."   
    },
    {
       id:4,
       title: " Customer Focus",
       description: "We build solutions according to customer needs." 
    }
]

const About = () => {
  return (
   <div>
     <section className="bg-blue-100 py-16 sm:py-20">
        <div className="container max-w-6xl mx-auto px-6 sm:px-4 lg:px-6 text-center">
            <p className="text-blue-600 text-2xl font-semibold mb-3">About us</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
                About <span className="text-blue-600">
                 Next Gen Digital</span></h1>
            <p className="max-w-2xl mx-auto mt-4 text-gray-500">
            we create modern digital solutions that help businesses grow and build a strong online presence
          </p>
        </div>
    </section>

    <section className="bg-white py-16 sm:py-20">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="h-64 sm:h-80 rounded-xl flex items-center justify-center">
                    <img src="/aboutpage.jpg" alt="aboutpage"
                    className="w-full h-full rounded-2xl shadow-lg" />
                </div>
                <div>
                    <p className="text-blue-500 text-xl font-semibold mb-4">Who we Are</p>
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 ">Your Digital <span className="text-blue-600">Trustable Patner</span></h2>
                    <p className="max-w-2xl mx-auto text-gray-600">Next Gen Digital is digital agency focused on creating modern websites and digital solutions</p>
                    <p className="max-w-2xl mx-auto text-gray-600">We combine clean design, modern technology and
                       user-friendly experiences to help businesses grow online.</p>
                     <div className="mt-5 space-y-3">
                        <div className="flex items-center gap-3">
                            <FaCheckCircle className="text-green-500" />
                            <p className="text-gray-700">Modern and responsive web design</p>
                        </div>
                           <div className="flex items-center gap-3">
                            <FaCheckCircle className="text-green-500" />
                            <p className="text-gray-700">User friendly digital solution</p>
                        </div>
                         <div className="flex items-center gap-3">
                            <FaCheckCircle className="text-green-500" />
                            <p className="text-gray-700"> Clean and scalable development</p>
                        </div>
                           <div className="flex items-center gap-3">
                            <FaCheckCircle className="text-green-500" />
                            <p className="text-gray-700">Buisness focused solution</p>
                        </div>
                     </div>
                     <div className="mt-7">
                        <Button to="/contact" variant='green'>Contact Us</Button>
                     </div>
                </div>
            </div>
        </div>
    </section>

    <section className="bg-gray-200 py-16 sm:py-20">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div>
                <h2 className="text-3xl md:text-3xl font-bold text-gray-900 text-center">Our <span className="text-blue-600">
                Mission & Vision</span>                                                                                                               </h2>
                <p className="max-w-3xl mx-auto text-center text-gray-500 mt-4">
                We create meaningful digital experiences for modern businesses</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">

                <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border-2xl">
                    <h3 className="text-xl font-bold text-blue-600">Our Mission</h3>
                    <p className="text-gray-600 mt-3 leading-7">  
                      Our mission is to provide reliable and user-friendly
                     digital solutions that help businesses achieve their goals.</p>
                </div>

                <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border-2xl">
                    <h3 className="text-xl font-bold text-blue-600">Our Vision</h3>
                    <p className="text-gray-600 mt-3 leading-7">  
                    Our vision is to become a trusted digital partner for
                businesses by delivering modern technology and creative solutions.</p>
                </div>
            </div>
        </div>
    </section>

    <section className="bg-slate-300 py-16 sm:py-20">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div>
                <h2 className="text-3xl md:text-3xl font-bold text-gray-900 text-center">Why <span className="text-blue-600">
                Choose Us</span>                                                                                                               </h2>
                <p className="max-w-3xl mx-auto text-center text-gray-500 mt-4">
                We focus on quality, creativity and customer satisfaction</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                { aboutCard.map((item) => (
                   <AboutCard 
                   key={item.id}
                   title={item.title}
                   description={item.description} /> 
                ))}
            </div>
        </div>
    </section>
    <CTA />
   </div>
  )
}

export default About;
