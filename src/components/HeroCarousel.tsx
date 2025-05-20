
import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

// Placeholder hero images - use your own or Unsplash as needed
const heroImages = [
  {
    src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80",
    alt: "Wedding Event",
    caption: "Weddings that tell your love story."
  },
  {
    src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=900&q=80",
    alt: "Matrix Event",
    caption: "Corporate Events with Impact."
  },
  {
    src: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=900&q=80",
    alt: "Beach Conference",
    caption: "Seaside Conferences & Retreats."
  },
];

const HeroCarousel = () => (
  <Carousel className="w-full h-[420px] sm:h-[420px] md:h-[520px] mt-20 select-none relative group">
    <CarouselContent className="h-full">
      {heroImages.map((img, i) => (
        <CarouselItem
          key={img.src}
          className="relative w-full h-[420px] md:h-[520px] !p-0 overflow-hidden rounded-2xl group"
        >
          <img
            src={img.src}
            alt={img.alt}
            className="object-cover w-full h-full brightness-90 group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#6E59A580] to-transparent" />
          <div className="absolute bottom-8 left-6 text-white drop-shadow-xl text-2xl md:text-3xl font-bold max-w-xs animate-fade-in">
            {img.caption}
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
    {/* Carousel next/prev arrows already present from shadcn carousel */}
  </Carousel>
);

export default HeroCarousel;
