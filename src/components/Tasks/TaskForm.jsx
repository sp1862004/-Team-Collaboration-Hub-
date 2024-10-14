import React, { useContext, useState, useEffect } from 'react';
import { TaskContext } from '../../context/TaskContext'; 

const TaskForm = ({ task, setEditingTask }) => {
  const { createTask, updateTask } = useContext(TaskContext);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.body);
    } else {
      setTitle('');
      setDescription('');
    }
  }, [task]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { title, body: description }; 

    if (task) {
      updateTask(task.id, newTask);
      setEditingTask(null); 
    } else {
      createTask(newTask);
    }

    setTitle('');
    setDescription('');
  };

  return (
    
    <form onSubmit={handleSubmit} className="mb-6 p-12">
      <h2 className="text-xl font-bold mb-4">{task ? 'Edit Task' : 'Add New Task'}</h2>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Task Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600 transition-colors"
      >
        {task ? 'Update Task' : 'Add Task'}
      </button>
      {task && (
        <button
          type="button"
          className="mt-2 w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition-colors"
          onClick={() => setEditingTask(null)} 
        >
          Cancel
        </button>
      )}
    </form>
  );
};

export default TaskForm;
