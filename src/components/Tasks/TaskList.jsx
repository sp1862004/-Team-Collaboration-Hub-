import React, { useContext, useState } from 'react';
import { TaskContext } from '../../context/TaskContext'; 
import TaskForm from './TaskForm'; 

const TaskList = () => {
  const { tasks, error, deleteTask } = useContext(TaskContext);
  const [editingTask, setEditingTask] = useState(null);

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Task List</h2>
      {tasks.length === 0 ? (
        <p className="text-gray-500">No tasks available.</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id} className="mb-2 p-4 border border-gray-300 rounded">
              <h3 className="font-semibold">{task.title}</h3>
              <p>{task.body}</p>
              <div className="flex justify-between mt-4">
                <button
                  className="text-indigo-600 hover:text-indigo-800"
                  onClick={() => setEditingTask(task)}
                >
                  Edit
                </button>
                <button
                  className="text-red-600 hover:text-red-800"
                  onClick={() => deleteTask(task.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      
     
      {editingTask && (
        <TaskForm task={editingTask} setEditingTask={setEditingTask} />
      )}
    </div>
  );
};

export default TaskList;
