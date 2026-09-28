import TestimonialCard from "../ui/TestimonialCard";

const testimonialsData = [
  {
    id: 1,
    quote: "Envicion Studio helped us scale our SaaS product's organic traffic by 120%. Their data-driven approach and SEO strategies are top-notch!",
    name: "Alex Rivera",
    role: "CEO at TechStart Inc.",
    avatar: "https://i.pravatar.cc/150?img=32",
  },
  {
    id: 2,
    quote: "Our local rankings skyrocketed within just a few months. The team is super professional, transparent, and always delivers real results.",
    name: "Sarah Jenkins",
    role: "Marketing Director at EcoClean",
    avatar: "https://i.pravatar.cc/150?img=47",
  },
  {
    id: 3,
    quote: "Their PPC ad management reduced our ad spend while doubling sales. Working with them was the best investment for our e-commerce brand.",
    name: "David Chen",
    role: "Founder at Fashion Forward",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-50 py-24">
        <div className="container max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                    What Our <span className="text-blue-600">Clients Say</span>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mt-4">
                    Don't just take our word for it. Here's what our satisfied clients have to say about working with us.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {testimonialsData.map((item) => (
                    <TestimonialCard
                    key={item.id}
                    quote={item.quote}
                    name={item.name}
                    role={item.role}
                    avatar={item.avatar}
                    />

                    ))}
            </div>
        </div>
    </section>
  )
}

export default Testimonials
