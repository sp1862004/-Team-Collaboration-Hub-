
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Sidebar toggle button */}
      <button 
        className="fixed top-4  left-4 z-50 bg-blue-600 text-white px-4 py-2 rounded-md shadow-md transition-transform transform hover:scale-105" 
        onClick={toggleSidebar}
      >
        <i className="fa-solid fa-bars"></i>
      </button>

      {/* Sidebar container */}
      <div 
        className={`transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} fixed top-0 left-0 h-full bg-white shadow-lg w-64 z-30`}
      >
        <div className="p-4 h-full flex flex-col pt-20">
          <h2 className="text-2xl font-bold mb-4">Task Manager</h2>
          <button 
            onClick={toggleSidebar} 
            className="mb-4 text-red-600 transition-colors duration-200 hover:text-red-500"
          >
            Close
          </button>
          <nav className="flex-grow">
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/dashboard" 
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-200 rounded transition-all duration-200 transform hover:translate-x-2"
                >
                  Home
                </Link>
              </li>
              
              <li>
                <Link 
                  to="/about" 
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-200 rounded transition-all duration-200 transform hover:translate-x-2"
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-200 rounded transition-all duration-200 transform hover:translate-x-2"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link 
                  to="/chat" 
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-200 rounded transition-all duration-200 transform hover:translate-x-2"
                >
                  Chat
                </Link>
              </li>
              <li>
                <Link 
                  to="/add-task" 
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-200 rounded transition-all duration-200 transform hover:translate-x-2"
                >
                  Add Task
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Overlay for the sidebar */}
      <div 
        className={`fixed inset-0 bg-gray-800 bg-opacity-50 z-20 transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} 
        onClick={toggleSidebar}
      />
    </>
  );
};

export default Sidebar;
