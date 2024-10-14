
import React from 'react';
import TaskList from '../Tasks/TaskList';
import TaskFilter from '../Tasks/TaskFilter';
import UserManagement from './UserManagement'; 

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6 pt-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Admin Dashboard</h1>
        <button
          onClick={() => {"/dashboard"}}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
        >
          Manage Users
        </button>
      </div>

      {/* Task Filter */}
      <TaskFilter />

      {/* Task List */}
      <TaskList />

      {/* Users Overview Section */}
      <div className="mt-8 bg-white shadow-lg rounded-lg p-6 animate-fadeIn">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Users Overview</h2>
        <ul className="list-disc list-inside">
          <li>John Doe - 5 Tasks</li>
          <li>Jane Smith - 3 Tasks</li>
          <li>Mark Lee - 7 Tasks</li>
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboard;
