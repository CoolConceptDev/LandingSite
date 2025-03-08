"use client";

import { MdOutlineMenu } from "react-icons/md";
import { Snowflake } from 'lucide-react';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Team", path: "/team" },
    { name: "Clients", path: "/clients" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white px-4 md:px-8">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
        <Snowflake className="h-8 w-8 text-green-600" />
          <span className="text-xl font-bold text-gray-800">
            <span className="text-green-600">Cool</span> Concept
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`text-sm font-medium px-3 py-2 rounded-md transition-all duration-300 ${
                pathname === item.path
                  ? "bg-green-500 text-white"
                  : "text-gray-800 hover:bg-green-200 hover:text-gray-900"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="secondary" size="icon">
              <MdOutlineMenu className="h-6 w-6 text-gray-900" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <nav className="flex flex-col gap-4 mt-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`text-lg font-medium px-3 py-2 rounded-md transition-all duration-300 ${
                    pathname === item.path
                      ? "bg-green-500 text-white"
                      : "text-gray-800 hover:bg-green-200 hover:text-gray-900"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}