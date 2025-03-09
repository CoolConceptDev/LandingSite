"use client"; 
import { Button } from './ui/button';
import Link from 'next/link'; // Use Next.js's Link

export default function Hero() {
  const phoneNumber = "+917045992776";

  return (
    <div className="relative overflow-hidden min-h-screen bg-white -mt-20">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 lg:w-full lg:max-w-2xl">
          <div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
                Expert AC Solutions <br />
                <span className="text-green-600">For Every Need</span>
              </h1>
              <p className="mt-6 text-sm md:text-lg md:leading-8 text-gray-600">
                Expert AC repairs and bulk sales solutions. Keep your space cool and comfortable with Cool Concept's professional services and top-quality air conditioning units.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <Link href="/contact">
                  <Button className="bg-green-600 hover:bg-green-700">
                    Schedule Service
                  </Button>
                </Link>
                <a href={`tel:${phoneNumber}`}>
                  <Button variant="outline">
                    Bulk Orders
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
          src="/hero.jpg"
          alt="AC Installation"
        />
      </div>
    </div>
  );
}