
import About from '../components/home/About';
import CTA from '../components/home/CTA';
import Hero from '../components/home/Hero';
import Protfolio from '../components/home/Portfolio';
import Services from '../components/home/Services';
import Testimonials from '../components/home/Testimonials';

const Home = () => {
  return (
    <>
   <Hero />
   <About />
   <Services />
   <Protfolio />
   <Testimonials />
   <CTA />
    </>
  )
}

export default Home;
