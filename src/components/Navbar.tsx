
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

// Placeholder logo
const Logo = () => (
  <div className="flex items-center gap-2">
    <div className="bg-[#9b87f5] text-white rounded-md px-2 py-1 font-bold text-lg">Sy</div>
    <span className="text-xl font-extrabold text-[#6E59A5] tracking-wide">
      Skyra Events
    </span>
  </div>
);

const navLinks = [
  { name: "Home", to: "/" },
  { name: "Services", to: "/services" },
  { name: "About Us", to: "/about" },
];

const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <header className="w-full bg-white/90 backdrop-blur-md fixed top-0 left-0 z-30 border-b border-gray-100 shadow-sm">
      <nav className="container max-w-6xl mx-auto h-16 flex items-center justify-between px-2">
        <Link to="/" className="flex items-center gap-2 hover:opacity-90">
          <Logo />
        </Link>
        <div className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              className={`text-base font-semibold hover:text-[#9b87f5] transition ${
                location.pathname === link.to ? "text-[#9b87f5]" : "text-gray-700"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
        {/* Book button */}
        <Link to="/booking">
          <Button className="bg-[#9b87f5] text-white font-bold rounded-full px-6 py-2 text-base shadow-lg hover:bg-[#7E69AB] transition">
            Book Your Event
          </Button>
        </Link>
        {/* Hamburger for mobile */}
        <input id="nav-toggle" className="hidden" type="checkbox" />
        <label htmlFor="nav-toggle" className="md:hidden cursor-pointer p-2 ml-2">
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-[#6E59A5]"></span>
            <span className="block w-6 h-0.5 bg-[#6E59A5]"></span>
            <span className="block w-4 h-0.5 bg-[#6E59A5]"></span>
          </div>
        </label>
        {/* Mobile menu */}
        <div className="absolute bg-white left-0 top-16 w-full md:hidden px-6 shadow-md hidden" id="mobile-menu">
          <div className="flex flex-col items-center pb-4 gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className={`block py-2 text-base font-semibold hover:text-[#9b87f5] transition ${
                  location.pathname === link.to ? "text-[#9b87f5]" : "text-gray-700"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/booking" className="w-full">
              <Button className="bg-[#9b87f5] w-full mt-2 text-white font-bold rounded-full py-2 text-base shadow-lg hover:bg-[#7E69AB] transition">
                Book Your Event
              </Button>
            </Link>
          </div>
        </div>
        <script dangerouslySetInnerHTML={{
          __html: `
            document.getElementById('nav-toggle').onchange = function() {
              document.getElementById('mobile-menu').classList.toggle('hidden');
            };
          `,
        }} />
      </nav>
    </header>
  );
};

export default Navbar;
