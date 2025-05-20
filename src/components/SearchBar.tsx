
import React from "react";
import { Button } from "@/components/ui/button";

const SearchBar = () => (
  <form className="w-full max-w-2xl mx-auto flex flex-col md:flex-row items-center gap-4 shadow px-4 py-2 bg-white/80 rounded-xl mt-6 mb-8 border border-gray-100">
    <input type="text" name="location" placeholder="Location" className="bg-white rounded-md border border-gray-200 px-3 py-2 text-sm flex-1 focus:outline-none focus:ring focus:ring-[#D6BCFA]/30 transition" />
    <select name="event-type" className="rounded-md border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring focus:ring-[#D6BCFA]/30 transition">
      <option>Event Type</option>
      <option>Wedding</option>
      <option>Corporate</option>
      <option>Birthday</option>
      <option>Conference</option>
      <option>College Fest</option>
    </select>
    <input type="number" name="capacity" min="1" placeholder="Capacity" className="bg-white rounded-md border border-gray-200 px-3 py-2 text-sm w-28 focus:outline-none focus:ring focus:ring-[#D6BCFA]/30 transition" />
    <input type="number" name="budget" min="1" placeholder="Budget Range" className="bg-white rounded-md border border-gray-200 px-3 py-2 text-sm w-32 focus:outline-none focus:ring focus:ring-[#D6BCFA]/30 transition" />
    <Button
      type="submit"
      className="bg-[#6E59A5] text-white font-bold px-4 py-2 rounded-full w-full md:w-auto"
    >
      Search
    </Button>
  </form>
);

export default SearchBar;
