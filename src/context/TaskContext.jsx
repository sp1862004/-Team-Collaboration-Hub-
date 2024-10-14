import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [filters, setFilters] = useState({
    status: 'All',
    priority: 'All',
    dueDate: 'All',
  });
  const [error, setError] = useState(null);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      const tasksWithStatusAndPriority = response.data.map((task) => ({
        ...task,
        status: 'To Do', 
        priority: 'Medium', 
      }));
      setTasks(tasksWithStatusAndPriority);
    } catch (err) {
      setError('Failed to fetch tasks');
    }
  };

  const createTask = async (task) => {
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', task);
      setTasks((prevTasks) => [
        ...prevTasks,
        { ...response.data, status: 'To Do', priority: 'Medium' }, 
      ]);
    } catch (err) {
      setError('Failed to create task');
    }
  };

  const updateTask = async (id, updatedTask) => {
    try {
      await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, updatedTask);
      setTasks((prevTasks) =>
        prevTasks.map((task) => (task.id === id ? { ...task, ...updatedTask } : task))
      );
    } catch (err) {
      setError('Failed to update task');
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    } catch (err) {
      setError('Failed to delete task');
    }
  };

  const updateFilters = (newFilters) => {
    setFilters((prevFilters) => ({ ...prevFilters, ...newFilters }));
  };

  useEffect(() => {
    fetchTasks(); 
  }, []);

  return (
    <TaskContext.Provider value={{ tasks, error, createTask, updateTask, deleteTask, updateFilters }}>
      {children}
    </TaskContext.Provider>
  );
};
