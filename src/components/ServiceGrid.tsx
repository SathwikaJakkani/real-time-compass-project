
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

const services = [
  {
    name: "Weddings",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=600&q=80",
    desc: "Magical weddings designed for unforgettable memories.",
    path: "/services/wedding"
  },
  {
    name: "Corporate Events",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80",
    desc: "Professional execution for seamless corporate occasions.",
    path: "/services/corporate"
  },
  {
    name: "Birthdays",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=600&q=80",
    desc: "Joyful birthday celebrations for all ages.",
    path: "/services/birthday"
  },
  {
    name: "College Fests",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=600&q=80",
    desc: "High-energy college festivals and cultural events.",
    path: "/services/college-fest"
  },
];

const ServiceGrid = () => (
  <section className="container mx-auto py-12">
    <h2 className="text-3xl md:text-4xl font-extrabold text-[#6E59A5] mb-8 text-center">
      Our Services
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {services.map((s) => (
        <Card key={s.name} className="rounded-3xl bg-[#F1F0FB] hover:shadow-xl transition group">
          <CardHeader className="p-0">
            <img
              src={s.image}
              alt={s.name}
              className="rounded-t-3xl h-40 w-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </CardHeader>
          <CardContent className="px-5 py-4 flex flex-col items-center">
            <h3 className="text-xl font-bold text-[#6E59A5]">{s.name}</h3>
            <p className="text-sm text-gray-600 mt-2">{s.desc}</p>
            <Link
              to={s.path}
              className="mt-4 font-semibold text-white bg-[#9b87f5] hover:bg-[#7E69AB] px-4 py-2 rounded-full shadow transition"
            >
              View Details
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  </section>
);

export default ServiceGrid;
