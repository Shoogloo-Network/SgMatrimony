import React from 'react';

const NavBar: React.FC = () => {
  return (
    <header className="bg-gray-800  text-black  z-10 w-full">
    <div className="container mx-auto px-8 py-4 flex justify-between items-center">
      <div className="text-2xl font-bold text-white">
        <a href="/">Shoogloo.com</a>
      </div>
      <nav className="space-x-4">
        <a href="/" className="text-white hover:text-white">Home</a>
        <a href="/profiles" className="text-white hover:text-white">Profile</a>
        <a href="/login" className="text-white hover:text-white">Login</a>
        <a href="/register" className="text-white hover:text-white-800">Register</a>
      </nav>
    </div>
  </header>
  );
}

export default NavBar;
