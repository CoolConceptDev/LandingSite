// app/layout.js
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
// import { Toaster } from '../components/ui/toaster';
import CallButton from '../components/CallButton'; // Import the CallButton

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-white text-gray-800`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <CallButton />
        {/* <Toaster /> */}
      </body>
    </html>
  );
}