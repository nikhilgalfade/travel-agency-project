import React from "react";
import Hero from "./components/Hero/Hero";
import Sidebar from "./components/Navbar/Navbar";
import Aboutus from "./components/About us/Aboutus";
import Package from "./components/Package/Package"
function App() {
  return (
    <div>
      <Sidebar/>
      <Hero />
      <Aboutus/>
      <Package/>
    </div>
  );
}

export default App;
