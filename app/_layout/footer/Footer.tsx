import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between">
          <div>
            <h2 className="text-xl font-bold mb-4">Shaadi.com</h2>
            <p className="mb-4">Find your perfect match with us.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
              <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">Quick Links</h2>
            <ul>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Services</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
            <p className="mb-2">Email: support@shaadi.com</p>
            <p className="mb-2">Phone: +1 234 567 890</p>
            <p>Address: 123 Shaadi Street, Matrimony City</p>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          © 2024 Shaadi.com. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
