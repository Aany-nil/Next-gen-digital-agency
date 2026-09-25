
import Button from '../ui/Button'

const Hero = () => {
  return (
      <section className="bg-blue-50">
        <div className="container max-w-7xl max-auto px-6 py-24">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
                <div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl front-bold text-gray-900 leading-light">
                        We grow your buisness with Digital Marketing
                        </h1>
                    <p className="text-gray-600 text-lg leading-relaxed mt-8 max-w-xl">Drive more traffic, generate quality leads, and boost your revenue with our proven SEO strategies, social media campaigns, and targeted advertising solutions.</p>
                    <div className="mt-4">
                        <Button variant="green">Great a free strategy call</Button>
                    </div>
                </div>
                <div className="flex justify-center lg:justify-end">
                    <img 
                    src="/hero.png" 
                    alt="Digital Marketing"
                    className="w-full max-w-lg rounded-2xl"/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero
