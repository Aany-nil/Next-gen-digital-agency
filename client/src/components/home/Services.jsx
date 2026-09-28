import { FaSearch } from "react-icons/fa";
import Card from "../ui/Card";
import { IoColorPaletteOutline, IoShareSocialOutline } from "react-icons/io5";
import { FiTarget } from "react-icons/fi";
import { SiBrandfetch } from "react-icons/si";




const Services = () => {
  return (
    <section className="bg-gray-100 py-24">
      <div className="container max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Our <span className="text-blue-600">Services</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mt-4">
            We offer comprehensive digital marketing solutions to help your business grow and succeed online.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card 
            icon={<FaSearch />}
            title="SEO Optimization"
            description="Boost your organic rankings and drive quality traffic with our proven SEO strategies and technical optimization."
          />

          <Card 
            icon={<IoShareSocialOutline  />}
            title="Social Media Marketing"
            description="Build brand awareness and engage your audience across all major social media platforms with compelling content."
          />

          <Card 
            icon={<FiTarget />}
            title="Paid Advertising"
            description="Maximize ROI with targeted Google Ads, Facebook Ads, and other PPC campaigns that convert visitors into customers."
          />
          <Card 
            icon={<IoColorPaletteOutline  />}
            title="Web Design"
            description="MCreate stunning, conversion-optimized websites that provide exceptional user experiences and drive results."
          />
          <Card 
            icon={<SiBrandfetch />}
            title="Branding"
            description="Develop a strong brand identity that resonates with your target audience and sets you apart from competitors."
          />
        </div>

      </div>
    </section>
  );
};

export default Services;
