import { Shield, Clock, Award, Users } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Fully certified technicians and comprehensive insurance coverage for your peace of mind"
  },
  {
    icon: Clock,
    title: "24/7 Service",
    description: "Round-the-clock emergency AC repair services, because comfort can't wait"
  },
  {
    icon: Award,
    title: "10+ Years Experience",
    description: "Decade-long expertise in AC repairs and installations across residential and commercial sectors"
  },
  {
    icon: Users,
    title: "5000+ Happy Customers",
    description: "A growing family of satisfied customers who trust our reliable AC solutions"
  }
];

export default function WhyChooseUs() {
  return (
    <section id="about" className="py-14 px-4 bg-white flex justify-center items-center">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Why Choose Cool Concept?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We combine expertise with reliability to deliver the best AC solutions for your needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-full bg-green-100 mb-4">
                <feature.icon className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}