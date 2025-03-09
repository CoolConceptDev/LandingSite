import { AirVent, ThermometerSun, ShoppingCart, Settings, PenTool as Tool, Clock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

const services = [
  {
    title: 'AC Repair & Maintenance',
    description: '24/7 emergency repairs and regular maintenance services for all AC brands',
    icon: Tool,
  },
  {
    title: 'New AC Installation',
    description: 'Professional installation of the latest energy-efficient AC units',
    icon: AirVent,
  },
  {
    title: 'Bulk AC Sales',
    description: 'Wholesale pricing for bulk orders of quality air conditioning units',
    icon: ShoppingCart,
  },
  {
    title: 'Commercial HVAC',
    description: 'Specialized solutions for businesses and commercial properties',
    icon: Settings,
  },
  {
    title: 'Emergency Services',
    description: 'Round-the-clock emergency repair services',
    icon: Clock,
  },
  {
    title: 'Climate Control',
    description: 'Advanced climate control solutions for optimal comfort',
    icon: ThermometerSun,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-14 px-4 bg-gray-50 flex justify-center items-center">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From emergency repairs to bulk sales, we provide comprehensive AC solutions for residential and commercial needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index}>
              <CardHeader>
                <service.icon className="h-8 w-8 text-green-600 mb-4" />
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="link" className="bg-white text-green-600 p-0">
                  Learn more →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}