import React, { useContext, useState } from 'react';
import { TaskContext } from '../../context/TaskContext';
import TaskForm from './TaskForm'; 

const TaskFilter = ({ setEditingTask }) => {
  const { updateFilters } = useContext(TaskContext);
  const [status, setStatus] = useState('All');
  const [priority, setPriority] = useState('All');
  const [dueDate, setDueDate] = useState('All');
  const [showAddTask, setShowAddTask] = useState(false); 

  const handleFilterChange = () => {
    updateFilters({ status, priority, dueDate });
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-6">
      <h2 className="text-xl font-semibold mb-4">Filter Tasks</h2>
      <div className="flex flex-col md:flex-row md:space-x-4">
        {/* Status Filter */}
        <div className="flex-1 mb-4 md:mb-0">
          <label className="block text-gray-700 mb-2">Status</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            onBlur={handleFilterChange}
          >
            <option>All</option>
            <option>To Do</option>
            <option>In Progress</option>
            <option>Completed</option>
          </select>
        </div>

        {/* Priority Filter */}
        <div className="flex-1 mb-4 md:mb-0">
          <label className="block text-gray-700 mb-2">Priority</label>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            onBlur={handleFilterChange}
          >
            <option>All</option>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </div>

        {/* Due Date Filter */}
        <div className="flex-1">
          <label className="block text-gray-700 mb-2">Due Date</label>
          <select
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            onBlur={handleFilterChange}
          >
            <option>All</option>
            <option>Overdue</option>
            <option>Today</option>
            <option>This Week</option>
          </select>
        </div>
      </div>

      {/* Add Task Button */}
      <button
        onClick={() => setShowAddTask((prev) => !prev)}
        className="mt-4 w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition-colors"
      >
        {showAddTask ? 'Cancel' : 'Add Task'}
      </button>

      {/* Show Task Form if Add Task is clicked */}
      {showAddTask && (
        <div className="mt-4">
          <TaskForm setEditingTask={setEditingTask} /> 
        </div>
      )}
    </div>
  );
};

export default TaskFilter;
