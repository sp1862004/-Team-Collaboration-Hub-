
import React from 'react';
import TaskList from '../Tasks/TaskList';
import TaskFilter from '../Tasks/TaskFilter';

const UserDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6 pt-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">User Dashboard</h1>
      </div>

      {/* Task Filter */}
      <TaskFilter />

      {/* Task List */}
      <TaskList />

      {/* Recent Activities Section */}
      <div className="mt-8 bg-white shadow-lg rounded-lg p-6 animate-fadeIn">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Recent Activities</h2>
        <ul className="list-disc list-inside">
          <li>Completed task: Design Review</li>
          <li>Created new task: API Integration</li>
          <li>Joined chat: Team Discussion</li>
        </ul>
      </div>
    </div>
  );
};

export default UserDashboard;
