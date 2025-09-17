import React from "react";
import Hero from "./components/Hero/Hero";
import Sidebar from "./components/Navbar/Navbar";
import Aboutus from "./components/About us/Aboutus";
import Package from "./components/Package/Package"
import WhyUs from "./components/Why us/whyus";
function App() {
  return (
    <div>
      <Sidebar/>
      <Hero />
      <Aboutus/>
      <Package/>
      <WhyUs/>
    </div>
  );
}

export default App;
