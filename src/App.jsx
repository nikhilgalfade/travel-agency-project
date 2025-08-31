import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import Hero from './components/Hero/Hero';
import Packages from './components/Packages/Packages';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Packages />
      {/* About, BookingForm, Testimonials, Footer will go here */}
    </div>
  );
}

export default App;
