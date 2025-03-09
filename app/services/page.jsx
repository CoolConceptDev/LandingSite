'use client'; // Mark as a Client Component
import { useState } from 'react'; // Import useState
import { AirVent, ShoppingCart, Settings, PenTool as Tool, Clock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';

const serviceTabs = [
  { id: 'residential', label: 'Residential AC Repair' },
  { id: 'commercial', label: 'Commercial AC Repair' },
  { id: 'maintenance', label: 'Maintenance' },
  { id: 'installation', label: 'Installation' },
  { id: 'bulk-sales', label: 'Bulk Sales' },
  { id: 'emergency', label: 'Emergency Services' },
];

const services = {
  residential: [
    {
      title: 'Residential AC Repair',
      id: 'repair',
      description: '24/7 emergency repairs and regular maintenance services for all AC brands',
      icon: Tool,
      image: '/service1.jpg',
      process: [
        {
          step: 'Diagnosis',
          description: 'We thoroughly inspect your AC system to identify the issue.',
        },
        {
          step: 'Solution',
          description: 'We provide a detailed quote and recommended solution.',
        },
        {
          step: 'Repair',
          description: 'Our certified technicians perform the necessary repairs.',
        },
        {
          step: 'Follow-up',
          description: 'We ensure your AC system is working optimally and provide maintenance tips.',
        },
      ],
    },
  ],
  commercial: [
    {
      title: 'Commercial AC Repair',
      description: 'Specialized solutions for businesses and commercial properties',
      icon: Settings,
      image: '/service2.jpg',
      process: [
        {
          step: 'Diagnosis',
          description: 'We thoroughly inspect your AC system to identify the issue.',
        },
        {
          step: 'Solution',
          description: 'We provide a detailed quote and recommended solution.',
        },
        {
          step: 'Repair',
          description: 'Our certified technicians perform the necessary repairs.',
        },
        {
          step: 'Follow-up',
          description: 'We ensure your AC system is working optimally and provide maintenance tips.',
        },
      ],
    },
  ],
  maintenance: [
    {
      title: 'AC Maintenance',
      description: 'Regular maintenance to keep your AC running efficiently',
      icon: Clock,
      image: '/service3.jpg',
      process: [
        {
          step: 'Inspection',
          description: 'We thoroughly inspect your AC system for any issues.',
        },
        {
          step: 'Cleaning',
          description: 'We clean the filters, coils, and other components.',
        },
        {
          step: 'Testing',
          description: 'We test the system to ensure optimal performance.',
        },
        {
          step: 'Report',
          description: 'We provide a detailed report and maintenance tips.',
        },
      ],
    },
  ],
  installation: [
    {
      title: 'New AC Installation',
      description: 'Professional installation of the latest energy-efficient AC units',
      icon: AirVent,
      image: '/service4.jpg',
      process: [
        {
          step: 'Assessment',
          description: 'We assess your space and recommend the best AC unit.',
        },
        {
          step: 'Installation',
          description: 'Our certified technicians install the AC unit professionally.',
        },
        {
          step: 'Testing',
          description: 'We test the system to ensure it’s working perfectly.',
        },
        {
          step: 'Handover',
          description: 'We provide a user guide and maintenance tips.',
        },
      ],
    },
  ],
  'bulk-sales': [
    {
      title: 'Bulk AC Sales',
      description: 'Wholesale pricing for bulk orders of quality air conditioning units',
      icon: ShoppingCart,
      image: '/service5.jpg',
      process: [
        {
          step: 'Consultation',
          description: 'We discuss your requirements and recommend the best units.',
        },
        {
          step: 'Order',
          description: 'We process your bulk order and provide a timeline.',
        },
        {
          step: 'Delivery',
          description: 'We deliver the units to your location.',
        },
        {
          step: 'Support',
          description: 'We provide installation support and maintenance tips.',
        },
      ],
    },
  ],
  emergency: [
    {
      title: 'Emergency Services',
      description: 'Round-the-clock emergency repair services',
      icon: Clock,
      image: '/service6.jpg',
      process: [
        {
          step: 'Call',
          description: 'Contact us for immediate assistance.',
        },
        {
          step: 'Diagnosis',
          description: 'We diagnose the issue and provide a solution.',
        },
        {
          step: 'Repair',
          description: 'Our technicians perform the necessary repairs.',
        },
        {
          step: 'Follow-up',
          description: 'We ensure your AC is working perfectly.',
        },
      ],
    },
  ],
};

export default function Services() {
  const [activeTab, setActiveTab] = useState('residential');

  return (
    <div className='flex justify-center items-center'>
    <section id="services" className="pt-10 pb-20 bg-gray-50 ">
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From emergency repairs to bulk sales, we provide comprehensive AC solutions for residential and commercial needs.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {serviceTabs.map((tab) => (
            <Button
              key={tab.id}
              variant={activeTab === tab.id ? 'default' : 'outline'}
              className={`${
                activeTab === tab.id ? 'bg-green-600 text-white px-6' : 'text-gray-700'
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </Button>
          ))}
        </div>

        {/* Service Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 md:px-8 px-2">
          <div className="space-y-8">
            {services[activeTab].map((service, index) => (
              <Card key={index}>
                <CardHeader>
                  <service.icon className="h-8 w-8 text-green-600 mb-4" />
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {service.process.map((step, i) => (
                      <div key={i} className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <span className="h-8 w-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                            {i + 1}
                          </span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{step.step}</h4>
                          <p className="text-gray-600 text-sm">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="hidden lg:block">
            <img
              src={services[activeTab][0].image}
              alt={services[activeTab][0].title}
              className="w-full h-[430px] object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Our Process Section */}
      <section id="process" className="pt-14 bg-gray-50">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Our Process</h2>
            <p className="text-gray-600 md:text-base text-sm max-w-2xl mx-auto">
              We follow a structured approach to ensure the successful delivery of every service.
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4">
            {/* Step 1: Diagnosis */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="h-12 w-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Diagnosis</h3>
              <p className="text-gray-600">
                We thoroughly inspect your AC system to identify the issue.
              </p>
            </div>

            {/* Step 2: Solution */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="h-12 w-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Solution</h3>
              <p className="text-gray-600">
                We provide a detailed quote and recommended solution.
              </p>
            </div>

            {/* Step 3: Repair */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="h-12 w-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Repair</h3>
              <p className="text-gray-600">
                Our certified technicians perform the necessary repairs or installation.
              </p>
            </div>

            {/* Step 4: Follow-up */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="h-12 w-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Follow-up</h3>
              <p className="text-gray-600">
                We ensure your AC system is working optimally and provide maintenance tips.
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
    </div>
  );
}