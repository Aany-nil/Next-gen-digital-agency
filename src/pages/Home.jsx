
import About from '../components/home/About';
import CTA from '../components/home/CTA';
import Hero from '../components/home/Hero';
import Protfolio from '../components/home/Portfolio';
import Services from '../components/home/Services';
import Testimonials from '../components/home/Testimonials';
import Footer from '../components/layout/Footer';

const Home = () => {
  return (
    <>
   <Hero />
   <About />
   <Services />
   <Protfolio />
   <Testimonials />
   <CTA />
   <Footer />
    </>
  )
}

export default Home;
