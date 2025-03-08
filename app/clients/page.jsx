import Testimonials from '../../components/Testimonials';
import { Card, CardContent } from '../../components/ui/card';
import { Building2, Building, Home, Factory, CheckCircle } from 'lucide-react';

const companies = [
  {
    name: "Skyline Towers",
    type: "Commercial",
    icon: Building2,
    description: "Complete HVAC solution for a 30-story office building",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Green Valley Residences",
    type: "Residential",
    icon: Home,
    description: "Bulk AC installation for 200+ luxury apartments",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "TechPark Solutions",
    type: "Industrial",
    icon: Factory,
    description: "Industrial cooling system for data center facility",
    image: "https://images.unsplash.com/photo-1558402529-d2638a7023e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "City Mall Complex",
    type: "Commercial",
    icon: Building,
    description: "Centralized AC system for shopping mall",
    image: "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
  }
];

const successStories = [
  {
    name: "TickNews",
    type: "AI-Powered Customer Service Platform",
    icon: Building2,
    description: "We developed an AI-powered customer service platform for TickNews that reduced response times by 60% and improved customer satisfaction scores by 35%.",
    image: "https://i.pinimg.com/736x/05/46/3f/05463f8691f2013ee5d0e3a55c218cd4.jpg",
    results: [
      "60% reduction in response times",
      "35% improvement in customer satisfaction",
      "25% decrease in support costs"
    ],
    badge: "AI Innovation"
  },
  {
    name: "GreenTech Solutions",
    type: "Sustainable Energy Management",
    icon: Factory,
    description: "We implemented a sustainable energy management system for GreenTech, reducing energy costs by 40% and carbon footprint by 30%.",
    image: "https://i.pinimg.com/736x/a1/98/bd/a198bd6db0ae65ffe1141629a0476951.jpg",
    results: [
      "40% reduction in energy costs",
      "30% reduction in carbon footprint",
      "20% increase in operational efficiency"
    ],
    badge: "Sustainability"
  }
];

export default function SuccessStories() {
  return (
    <div className="py-16 -mt-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
      <div className="text-center py-10">
        <h1 className="text-4xl font-bold">Our Clients</h1>
        <p className="text-gray-500 max-w-3xl mx-auto mt-6 md:text-lg text-sm">
        We've had the privilege of working with a diverse range of clients across various industries. Our solutions helped businesses of all sizes achieve their goals and drive growth.
        </p>
      </div>

        {/* Companies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {companies.map((company, index) => (
            <Card key={index} className="overflow-hidden bg-white shadow-lg rounded-lg">
              <CardContent className='p-0'>
                <img
                  src={company.image}
                  alt={company.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <company.icon className="h-5 w-5 text-blue-600" />
                    <span className="text-sm text-blue-600">{company.type}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{company.name}</h3>
                  <p className="text-gray-600">{company.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Success Stories */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Success Stories</h2>
          {successStories.map((story, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center gap-8 mb-12 md:mx-10 bg-white rounded-lg shadow-lg">
              <div className="flex-1 p-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
                    {story.badge}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{story.name}</h3>
                <p className="text-gray-600 mb-6">{story.description}</p>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Key Results:</h4>
                  <ul className="space-y-3">
                    {story.results.map((result, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-600">
                        <CheckCircle className="h-5 w-5 text-blue-600" />
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex-1">
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-full h-[400px] mb-2 md:mb-0 rounded-r-lg object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Section */}
        <Testimonials />
      </div>
    </div>
  );
}