
import ProtfolioCard from '../ui/ProtfolioCard';

const protfolioData = [
  {
     id: 1,
     client: 'TechStart Inc.',
     category: 'SaaS',
     challenge: 'Low organic visibility',
     timeline: 'Achieved in 6 months',
     metrics: [
      { label: 'Website Traffic', value: '+120%' },
      { label: 'Qualified Leads', value: '+300%' },
      { label: 'Conversion Rate', value: '+85%' },
    ],
  },
  {
    id: 2,
    client: 'EcoClean Solutions',
    category: 'Home Services',
    challenge: 'Limited online presence',
    timeline: 'Achieved in 8 months',
    metrics: [
      { label: 'Local Rankings', value: '+200%' },
      { label: 'Phone Calls', value: '+150%' },
      { label: 'Revenue Growth', value: '+180%' },
    ],
  },
  {
    id: 3,
    client: 'Fashion Forward',
    category: 'E-commerce',
    challenge: 'High ad costs, low ROAS',
    timeline: 'Achieved in 4 months',
    metrics: [
      { label: 'Ad Spend Efficiency', value: '+65%' },
      { label: 'Online Sales', value: '+240%' },
      { label: 'Customer Acquisition', value: '+190%' },
    ],
  },
];

const Protfolio = () => {
  return (
    <section className="bg-white py-20">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            Protfolio & <span className="text-blue-600">Results</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mt-4">
            See how we've helped businesses like yours achieve remarkable growth and success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {protfolioData.map((item) => (
            <ProtfolioCard
              key={item.id}
              client={item.client}
              category={item.category}
              challenge={item.challenge}
              timeline={item.timeline}
              metrics={item.metrics}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Protfolio;
