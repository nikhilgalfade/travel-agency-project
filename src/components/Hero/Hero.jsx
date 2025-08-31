import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="h-screen bg-[url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')] bg-cover bg-center flex items-center justify-center">
      <div className="text-center text-white bg-black bg-opacity-40 p-8 rounded">
        <h1 className="text-5xl font-bold mb-4">Explore the World</h1>
        <p className="mb-6">Plan your perfect journey with us</p>
        <button className="bg-blue-500 px-6 py-2 rounded hover:bg-blue-700">Start Planning</button>
      </div>
    </section>
  );
};

export default Hero;
