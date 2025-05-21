
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Booking from "./pages/Booking";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <Router>
      <div className="bg-[#F4F0FA] min-h-screen">
        <Navbar />
        <div className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:service" element={<ServiceDetail />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
