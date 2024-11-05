import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddTaskPage() {
  const navigate = useNavigate();
  const [taskName, setTaskName] = useState('');
  const [taskDetails, setTaskDetails] = useState('');
  const [taskDateTime, setTaskDateTime] = useState('');

  const handleAddTask = () => {
    // Create a new task object with a unique ID
    const newTask = {
      id: Date.now(), // Unique ID based on timestamp
      title: taskName,
      details: taskDetails,
      dateTime: taskDateTime,
      showDetails: false,
    };

    // Get existing tasks from localStorage or initialize to an empty array
    const existingTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    existingTasks.push(newTask);

    // Save the updated task list back to localStorage
    localStorage.setItem('tasks', JSON.stringify(existingTasks));

    // Navigate back to the task list after adding
    navigate('/tasks');
  };

  return (
    <div className="container" style={{ maxWidth: '500px', margin: 'auto', textAlign: 'center', padding: '20px' }}>
      <h2>Add Task</h2>
      <input 
        type="text" 
        placeholder="Task Name" 
        value={taskName} 
        onChange={(e) => setTaskName(e.target.value)} 
        style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
      />
      <textarea 
        rows="4" 
        placeholder="Details" 
        value={taskDetails} 
        onChange={(e) => setTaskDetails(e.target.value)} 
        style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
      ></textarea>
      <input 
        type="datetime-local" 
        value={taskDateTime} 
        onChange={(e) => setTaskDateTime(e.target.value)} 
        style={{ width: '100%', padding: '10px', marginBottom: '20px', borderRadius: '5px', border: '1px solid #ccc' }}
      />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <button 
          onClick={handleAddTask} 
          style={{ backgroundColor: '#a370f0', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
        >
          Add Task
        </button>
        <button 
          onClick={() => navigate('/tasks')} 
          style={{ backgroundColor: '#555', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
        >
          Go Back to Task List
        </button>
      </div>
    </div>
  );
}

export default AddTaskPage;
