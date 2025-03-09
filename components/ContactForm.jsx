// ContactForm.jsx
"use client";

import Head from 'next/head';
import { useState } from 'react';
import { db } from '../firebase'; // Updated to match your file name
import { collection, addDoc } from 'firebase/firestore';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    if (!formData.name || !formData.email) {
      setError('Name and Email are required');
      setLoading(false);
      return;
    }

    try {
      const docRef = await addDoc(collection(db, 'visitors'), {
        ...formData,
        timestamp: new Date().toISOString(),
      });

      console.log("Document written with ID: ", docRef.id);
      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (err) {
      console.error("Error adding document: ", err);
      setError("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-full mb-10 px-4 text-center">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4 text-left">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div>
                <label htmlFor="name" className="block mb-1">Your Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Swapnil Patil"
                  className="w-full p-2 shadow-sm bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@gmail.com"
                  className="w-full p-2 shadow-sm bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block mb-1">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 1234567890"
                  className="w-full p-2 shadow-sm bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block mb-1">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Repair inquiry"
                  className="w-full p-2 shadow-sm bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                />
              </div>
            </div>
            <div className="text-left">
              <label htmlFor="message" className="block mb-1">Your Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your inquiry..."
                className="w-full p-2 shadow-sm bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                rows="4"
              />
            </div>
            {error && <p className="text-red-500 text-left text-sm">{error}</p>}
            {success && (
              <p className="text-green-500 text-left text-sm">Message sent successfully!</p>
            )}
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-lg text-white transition-colors ${
                loading
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-green-600 hover:bg-green-700'
              }`}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
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