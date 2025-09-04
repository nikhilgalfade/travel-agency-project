import React from "react";
import Hero from "./components/Hero/Hero";
import Sidebar from "./components/Navbar/Navbar";
import Aboutus from "./components/About us/Aboutus";

function App() {
  return (
    <div>
      <Sidebar/>
      <Hero />
      <Aboutus/>
      
    </div>
  );
}

export default App;
