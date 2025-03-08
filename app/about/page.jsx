import WhyChooseUs from '../../components/WhyChooseUs';
import { Calendar, MapPin, Lightbulb, Trophy } from 'lucide-react';

export default function About() {
  return (
    <div className="py-16 -mt-6">
      <div className="container">
        {/* About Section with Image */}
        <div className="grid md:grid-cols-2 gap-12 mb-20 px-4 md:px-14">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">About Cool Concept</h1>
            <p className="text-gray-700 mb-6 md:text-base text-sm">
              Cool Concept has been a trusted name in the air conditioning industry since 2010. We specialize in providing top-notch AC repair, maintenance, installation, and emergency services. Our team of certified technicians is dedicated to ensuring your comfort and satisfaction, whether it's a residential, commercial, or industrial project.
            </p>
            <p className="text-gray-700 mb-6 md:text-base text-sm">
              With a focus on innovation and customer-centric solutions, we have grown to become a market leader, serving thousands of happy customers across the region. Our commitment to quality, transparency, and reliability sets us apart in the industry.
            </p>
            <p className="text-gray-700 md:text-base text-sm">
              What sets us apart is our client-centric approach. We believe in building long-term relationships with our clients, understanding their unique needs, and delivering tailored solutions that drive real business value.
            </p>
          </div>
          <div className="hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="About Cool Concept"
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-10 px-4 md:px-20">
          <div className="bg-green-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-700">
              To provide exceptional air conditioning solutions that enhance comfort and efficiency while maintaining the highest standards of customer service and technical excellence.
            </p>
          </div>
          <div className="bg-green-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-700">
              To be the most trusted name in air conditioning services, known for innovation, reliability, and customer satisfaction across the nation.
            </p>
          </div>
        </div>

        {/* History Timeline */}
        <div className="p-4">
          <div className="container">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Journey</h2>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 w-1 h-full bg-green-200 transform -translate-x-1/2 hidden md:block"></div>

              {/* Timeline Items */}
              <div className="space-y-8">
                {/* 2010 - Foundation */}
                <div className="flex flex-col md:flex-row items-center w-full">
                  <div className="w-full md:w-1/2 pr-0 md:pr-8 text-center md:text-right mb-4 md:mb-0">
                    <h3 className="text-xl font-bold text-gray-900">2010 - Foundation</h3>
                    <p className="text-gray-700">WeFix was founded with a vision to provide innovative IT solutions to businesses.</p>
                  </div>
                  <div className="w-full md:w-1/2 pl-0 md:pl-8 flex justify-center md:justify-start">
                    <div className="bg-green-600 text-white rounded-full p-4">
                      <Calendar className="h-6 w-6" />
                    </div>
                  </div>
                </div>

                {/* 2013 - Expansion */}
                <div className="flex flex-col md:flex-row items-center w-full">
                  <div className="w-full md:w-1/2 pl-0 md:pl-8 flex justify-center md:justify-end order-2 md:order-1">
                    <div className="bg-green-600 text-white rounded-full p-4">
                      <MapPin className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 pr-0 md:pr-8 text-center md:text-left mb-4 md:mb-0 order-1 md:order-2 md:ml-20">
                    <h3 className="text-xl font-bold text-gray-900">2013 - Expansion</h3>
                    <p className="text-gray-700">We expanded our services to include mobile app development and UI/UX design.</p>
                  </div>
                </div>

                {/* 2016 - Global Reach */}
                <div className="flex flex-col md:flex-row items-center w-full">
                  <div className="w-full md:w-1/2 pr-0 md:pr-8 text-center md:text-right mb-4 md:mb-0 ">
                    <h3 className="text-xl font-bold text-gray-900">2016 - Global Reach</h3>
                    <p className="text-gray-700">We began serving clients internationally, expanding our reach to over 20 countries.</p>
                  </div>
                  <div className="w-full md:w-1/2 pl-0 md:pl-8 flex justify-center md:justify-start">
                    <div className="bg-green-600 text-white rounded-full p-4">
                      <Lightbulb className="h-6 w-6" />
                    </div>
                  </div>
                </div>

                {/* 2023 - Innovation Hub */}
                <div className="flex flex-col md:flex-row items-center w-full">
                  <div className="w-full md:w-1/2 pl-0 md:pl-8 flex justify-center md:justify-end order-2 md:order-1">
                    <div className="bg-green-600 text-white rounded-full p-4">
                      <Trophy className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 pr-0 md:pr-8 text-center md:text-left mb-4 md:mb-0 order-1 md:order-2 md:ml-20">
                    <h3 className="text-xl font-bold text-gray-900">2023 - Innovation Hub</h3>
                    <p className="text-gray-700">We established our innovation hub, focusing on emerging technologies like AI and blockchain.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <WhyChooseUs />
      </div>
    </div>
  );
}