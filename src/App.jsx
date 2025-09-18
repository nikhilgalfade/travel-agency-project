import React from "react";
import Hero from "./components/Hero/Hero";
import Sidebar from "./components/Navbar/Navbar";
import Aboutus from "./components/About us/Aboutus";
import Package from "./components/Package/Package"
import WhyUs from "./components/Whyus/whyus";
import Testimonials from "./components/testimonial/Testimonials";
import Ready from "./components/Ready/Ready";
function App() {
  return (
    <div>
      <Sidebar/>
      <Hero />
      <Aboutus/>
      <Package/>
      <WhyUs/>
      <Testimonials/>
      <Ready/>
    </div>
  );
}

export default App;
