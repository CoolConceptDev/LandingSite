import Hero from '../components/Hero';
import ServicesOverview from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';  

export default function Home() {
  return (
    <div>
      <Hero />
      <ServicesOverview />
      <WhyChooseUs />
      <ContactForm />
      <Testimonials />
    </div>
  );
}