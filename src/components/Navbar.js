
import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="w-full bg-white/90 fixed top-0 left-0 z-30 border-b border-gray-100 shadow-sm">
      <nav className="container mx-auto max-w-6xl h-16 flex items-center justify-between px-3">
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-[#25376F] text-white rounded-full px-3 py-1 font-bold text-lg">Sy</div>
          <span className="text-xl font-extrabold text-[#25376F] tracking-wide">
            Skyra Events
          </span>
        </Link>
        <div className="hidden md:flex gap-7 items-center">
          <NavLink to="/" end className={({isActive}) => isActive ? "text-[#25376F] font-semibold" : "text-gray-700 font-semibold hover:text-[#25376F]"}>Home</NavLink>
          <NavLink to="/services" className={({isActive}) => isActive ? "text-[#25376F] font-semibold" : "text-gray-700 font-semibold hover:text-[#25376F]"}>Services</NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? "text-[#25376F] font-semibold" : "text-gray-700 font-semibold hover:text-[#25376F]"}>About Us</NavLink>
        </div>
        <Link to="/booking">
          <button className="bg-[#25376F] text-white font-bold rounded-lg px-6 py-2 text-base shadow-lg hover:bg-[#415894] transition">
            Book Your Event
          </button>
        </Link>
        {/* Mobile hamburger */}
        <input id="nav-toggle" className="hidden" type="checkbox" />
        <label htmlFor="nav-toggle" className="md:hidden cursor-pointer p-2 ml-2">
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-[#25376F]"></span>
            <span className="block w-6 h-0.5 bg-[#25376F]"></span>
            <span className="block w-4 h-0.5 bg-[#25376F]"></span>
          </div>
        </label>
        {/* Mobile nav */}
        <div className="absolute bg-white left-0 top-16 w-full md:hidden px-6 shadow-md hidden" id="mobile-menu">
          <div className="flex flex-col items-center gap-3">
            <NavLink to="/" end className="block py-2 text-base font-semibold hover:text-[#25376F]">Home</NavLink>
            <NavLink to="/services" className="block py-2 text-base font-semibold hover:text-[#25376F]">Services</NavLink>
            <NavLink to="/about" className="block py-2 text-base font-semibold hover:text-[#25376F]">About Us</NavLink>
            <Link to="/booking" className="w-full">
              <button className="bg-[#25376F] w-full mt-2 text-white font-bold rounded-lg py-2 text-base shadow-lg hover:bg-[#415894] transition">
                Book Your Event
              </button>
            </Link>
          </div>
        </div>
        <script dangerouslySetInnerHTML={{
          __html: `document.getElementById('nav-toggle').onchange = function() { document.getElementById('mobile-menu').classList.toggle('hidden'); };`
        }} />
      </nav>
    </header>
  );
}

export default Navbar;
