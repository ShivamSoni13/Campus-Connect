import React from 'react';
// import logo from '../logo.svg';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <div className="flex items-center">
          <img src={logo} alt="Campus Connect" className="h-8 mr-2" />
          <span className="font-semibold text-lg">Campus Connect</span>
        </div>
        <div>
          <button className="px-4 py-2 text-gray-600 hover:text-gray-800">Home</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
