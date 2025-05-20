
import React from "react";
import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import SearchBar from "@/components/SearchBar";
import ServiceGrid from "@/components/ServiceGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E5DEFF] via-[#F1F0FB] to-[#D6BCFA] pb-8">
      <Navbar />
      {/* Hero Section */}
      <div className="pt-20">
        <div className="container mx-auto px-4">
          <div className="relative rounded-2xl overflow-hidden">
            <HeroCarousel />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center text-white drop-shadow-lg">
                Celebrate <span className="text-[#FFD700]">Brilliant</span> Moments <br />
                with <span className="text-[#9b87f5]">Skyra Events</span>
              </h1>
            </div>
          </div>
          <div className="mt-6 flex justify-center">
            <a href="#services">
              <button className="bg-[#9b87f5] text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-[#6E59A5] transition hover:scale-105 duration-200 text-base md:text-lg">
                Explore Services
              </button>
            </a>
          </div>
        </div>
      </div>
      {/* Smart Search Section */}
      <SearchBar />
      {/* Services Grid */}
      <div id="services">
        <ServiceGrid />
      </div>
    </div>
  );
};

export default Index;
