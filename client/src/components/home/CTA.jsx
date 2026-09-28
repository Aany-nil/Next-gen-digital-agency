
const CTA = () => {
  return (
    <section className="bg-blue-600 py-20 px-6">
        <div className="container max-w-xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
             Read to grow ? <span className="text-emerald-400">Let's talk</span></h2>

            <p className="text-blue-100 text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Don't let your competitors get ahead. Start your digital transformation today with a free strategy consultation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-all duration-300 w-full sm:w-auto">
                    Get Your Free Strategy Call
                </button>
                <button className="bg-white hover:bg-gray-200 hover:text-blue-700 font-semibold px-8 py-3 rounded-lg shadow-md transition-all duration-300 w-full sm:w-auto">
                    Contact us
                </button>
            </div>
        </div>
    </section>
  )
}

export default CTA;
