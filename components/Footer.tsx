"use client"; // Mark as a Client Component if using hooks or client-side features
import { Snowflake, Phone, Mail, MapPin } from 'lucide-react';
import Link from 'next/link'; // Use Next.js's Link

export default function Footer() {
  return (
    <footer id="contact" className="bg-white text-gray-800 border-t border-gray-200 px-4 flex justify-center items-center">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Snowflake className="h-8 w-8 text-green-600" />
              <span className="text-xl font-bold text-gray-800">
            <span className="text-green-600">Cool</span> Concept
          </span>
            </div>
            <p className="text-sm text-gray-600">
              Your trusted partner for all AC needs. Professional service, competitive prices, and customer satisfaction guaranteed.
            </p>
          </div>

          {/* Quick Links & Services in 2 Columns */}
          <div className="grid grid-cols-2 gap-8 col-span-2">
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-500 hover:text-green-600">Home</Link>
                </li>
                <li>
                  <Link href="/services" className="text-gray-500 hover:text-green-600">Services</Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-500 hover:text-green-600">About Us</Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-500 hover:text-green-600">Contact</Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Services</h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <Link href="/services#repair" className="text-gray-500 hover:text-green-600">AC Repair & Maintenance</Link>
                </li>
                <li>
                  <Link href="/services#installation" className="text-gray-500 hover:text-green-600">New AC Installation</Link>
                </li>
                <li>
                  <Link href="/services#sales" className="text-gray-500 hover:text-green-600">Bulk AC Sales</Link>
                </li>
                <li>
                  <Link href="/services#emergency" className="text-gray-500 hover:text-green-600">Emergency Services</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Us</h3>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-green-600" />
                <span className="text-sm">+91 123 456 7890</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-green-600" />
                <span>coolconcept.dev@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-green-600" />
                <span>Shop No. 01, Today Imperia, Sector 17, Ulwe</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-gray-600">
            &copy; {new Date().getFullYear()} Cool Concept. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}