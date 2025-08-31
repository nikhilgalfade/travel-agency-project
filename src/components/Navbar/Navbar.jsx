import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full bg-black text-white fixed top-0 left-0 z-50 px-6 py-4 flex justify-between items-center">
      <div className="text-2xl font-bold">Travel Agency</div>
      <ul className="flex space-x-6">
        <li>Home</li>
        <li>Packages</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
