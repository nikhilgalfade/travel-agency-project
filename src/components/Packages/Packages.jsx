import React from 'react';

const packages = [
  { id: 1, name: "Paris Tour", price: 1200, description: "5 days in Paris", imageUrl: "https://images.unsplash.com/photo-1528299121022-34a8cfb3fd13" },
  { id: 2, name: "Egypt Adventure", price: 900, description: "7 days in Egypt", imageUrl: "https://images.unsplash.com/photo-1504198266280-5ed0a30f2b08" },
  { id: 3, name: "Bali Getaway", price: 1500, description: "6 days in Bali", imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e" },
];

const Packages = () => {
  return (
    <section id="packages" className="p-8">
      <h2 className="text-3xl font-bold text-center mb-8">Our Packages</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {packages.map(pkg => (
          <div key={pkg.id} className="border rounded shadow hover:shadow-lg overflow-hidden">
            <img src={pkg.imageUrl} alt={pkg.name} className="h-48 w-full object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{pkg.name}</h3>
              <p className="mb-2">{pkg.description}</p>
              <p className="font-bold">${pkg.price}</p>
              <button className="mt-2 bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-700">Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Packages;
