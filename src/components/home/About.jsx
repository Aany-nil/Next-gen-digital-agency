import React from 'react'

const About = () => {
  return (
    <section className="bg-white py-20">
        <div className="container max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="w-full">
                    <img src="/about.png" alt="Digital Marketing Team Working"
                    className="w-full h-auto rounded-2xl shadow-lg"/>
                </div>
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                        About <span className="text-blue-600">Next Gen Digital</span></h2>
                    <p className="text-gray-600 text-base leading-relaxed mt-6">
                    We're a team of passionate digital marketing experts dedicated to helping businesses thrive in the digital landscape. With over 5 years of experience and 500+ successful campaigns, we know what it takes to drive real results.
                    </p>
                    <p className="text-gray-600 text-base leading-relaxed mt-4">
                    Our data-driven approach combines creativity with proven strategies to deliver measurable growth for our clients. From startups to enterprise companies, we've helped businesses of all sizes achieve their digital marketing goals.
                    </p>
                    <div className="grid grid-cols-3 gap-2 mt-8 pt-6 border-t border-gray-100">
                        <div>
                            <h3 className="text-3xl font-bold text-blue-500">5+</h3>
                            <p className="text-gray-500 text-sm font-medium mt-1">Years Experience</p>
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-green-400">500+</h3>
                            <p className="text-gray-500 text-sm font-medium mt-1">Projects Completed</p>
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-gray-600">300+</h3>
                            <p className="text-gray-500 text-sm font-medium mt-1">Happy Client</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About;
