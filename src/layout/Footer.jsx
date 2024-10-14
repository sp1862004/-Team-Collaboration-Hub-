
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 pb-10 pt-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-bold">Team Collaboration Hub</h2>
            <p className="text-sm">&copy; {new Date().getFullYear()} All rights reserved.</p>
          </div>
          <nav className="flex space-x-4">
            <a 
              href="/about" 
              className="hover:underline transition-all duration-300 transform hover:scale-110"
            >
              About
            </a>
            <a 
              href="/contact" 
              className="hover:underline transition-all duration-300 transform hover:scale-110"
            >
              Contact
            </a>
            <a 
              href="/notfound" 
              className="hover:underline transition-all duration-300 transform hover:scale-110"
            >
              Privacy Policy
            </a>
            <a 
              href="/notfound" 
              className="hover:underline transition-all duration-300 transform hover:scale-110"
            >
              Terms of Service
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
