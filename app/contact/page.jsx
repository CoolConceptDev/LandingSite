"use client";

import Head from 'next/head';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';
import { motion } from 'framer-motion';
import ContactForm from '@/components/ContactForm';

export default function Contact() {
  const contactDetails = [
    {
      icon: FaMapMarkerAlt,
      title: "Our Location",
      info: "Sector 17, Ulwe, Navi Mumbai",
    },
    {
      icon: FaPhoneAlt,
      title: "Phone Number",
      info: "+91 1234 5678 90",
    },
    {
      icon: FaEnvelope,
      title: "Email Address",
      info: "coolconcept.dev@gmail.com",
    },
    {
      icon: FaClock,
      title: "Working Hours",
      info: "10:00 AM - 8:00 PM",
    },
  ];

  const faqs = [
    {
      question: "What services does WeFix offer?",
      answer:
        "WeFix offers a comprehensive range of IT services including web development, mobile app development, UI/UX design, digital marketing, IT consulting, and cloud solutions.",
    },
    {
      question: "How long does it take to complete a project?",
      answer:
        "Project timelines vary depending on the scope and complexity. A simple website might take 2-4 weeks, while a complex web application could take 3-6 months. We'll provide you with a detailed timeline during our initial consultation.",
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer:
        "Yes, we offer various support and maintenance packages to ensure your solution continues to perform optimally after launch. Our team is available to address any issues and implement updates as needed.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-10 text-center">
      <Head>
        <title>Contact Us - Cool Concept</title>
        <meta name="description" content="Contact WeFix for IT services and support." />
      </Head>

      {/* Header */}
      <div className="text-center py-10">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="text-gray-500 max-w-3xl mx-auto mt-6 md:text-lg text-sm">
          Have a question or want to discuss your project? Get in touch with our team and we'll get back to you as soon as possible.
        </p>
      </div>

      {/* Contact Details */}
      <div className="bg-white md:p-6 p-1 mx-auto mb-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-4 text-center">
          {contactDetails.map((item, index) => (
            <div key={index} className="bg-white shadow px-6 py-10 text-center rounded-lg">
              <div className="bg-green-100 p-4 rounded-full inline-block">
                <item.icon className="text-green-600 text-3xl" />
              </div>
              <h3 className="text-lg font-medium text-gray-700 mt-3">{item.title}</h3>
              <p className="text-gray-600">{item.info}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Form */}
      <ContactForm />

      {/* FAQ Section with Animation */}
      <h2 className="text-3xl font-bold mt-16 mb-5">Frequently Asked Questions</h2>
      <p className="text-gray-600 mb-6 text-sm">Find answers to common questions about our services and process.</p>

      <motion.div
        className="mt-6 md:p-6 p-1 rounded-lg max-w-4xl mx-auto space-y-4 px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="shadow-md p-4 bg-white text-left rounded-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3 className="text-lg font-medium mb-3">{faq.question}</h3>
            <p className="text-gray-600 text-sm">{faq.answer}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
