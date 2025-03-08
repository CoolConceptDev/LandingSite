import Head from 'next/head';

export default function ContactForm() {
  return (
    <div className="min-h-full mb-10 px-4 text-center">
      {/* Contact Form & Map */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4 text-left">Send Us a Message</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div>
                <label htmlFor="name">Your Name *</label>
                <input type="text" placeholder="Swapnil Patil" className="w-full p-2 shadow-sm bg-white border rounded-lg" />
              </div>
              <div>
                <label htmlFor="email">Email Address *</label>
                <input type="email" placeholder="example@gmail.com" className="w-full p-2 shadow-sm bg-white border rounded-lg" />
              </div>
              <div>
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" placeholder="+91 1234567890" className="w-full p-2 shadow-sm bg-white border rounded-lg" />
              </div>
              <div>
                <label htmlFor="subject">Subject</label>
                <input type="text" placeholder="Repair inquiry" className="w-full p-2 shadow-sm bg-white border rounded-lg" />
              </div>
            </div>
            <div className='text-left'>
              <label htmlFor="message">Your Message</label>
              <textarea placeholder="Tell us about your inquiry..." className="w-full p-2 shadow-sm bg-white border rounded-lg" rows="4"></textarea>
            </div>
            <button type="submit" className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700">Send Message</button>
          </form>
        </div>
        <div className="bg-white md:h-full h-[350px] rounded-lg shadow-md overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.260485461475!2d73.01578347466241!3d18.964100055476987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c3edc1bdc691%3A0x2fa274d0c1dfbd67!2sCool%20Concept!5e0!3m2!1sen!2sin!4v1741344167423!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

    </div>
  );
}
