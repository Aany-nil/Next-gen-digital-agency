import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Testimonials from "./pages/Testimonials";



const App = () => {
  return (
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/testimonial" element={<Testimonials />} />
      </Route>
      </Routes>
   </BrowserRouter>

  )
}

export default App
