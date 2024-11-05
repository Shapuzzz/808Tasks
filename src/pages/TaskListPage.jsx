// TaskListPage.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function TaskListPage() {
  const navigate = useNavigate();
  const defaultTasks = [
    { id: 1, title: 'Get Gas', details: 'Gas is now $4 a gallon at Costco and $4.15 at Shell, go to Costco', dateTime: '2023-12-01T09:00', showDetails: false },
    { id: 2, title: 'English Class', details: 'Chapter 5 reading assignment', dateTime: '2023-12-02T10:00', showDetails: false },
    { id: 3, title: 'Math Class', details: 'Homework on calculus', dateTime: '2023-12-01T08:30', showDetails: false },
    { id: 4, title: 'Soccer Practice', details: 'Practice drills and scrimmage', dateTime: '2023-12-03T15:00', showDetails: false },
    { id: 5, title: 'English Paper', details: 'Essay due on Monday', dateTime: '2023-12-01T12:00', showDetails: false },
  ];

  const [tasks, setTasks] = useState([]);
  const [deletedTask, setDeletedTask] = useState(null);
  const [editingTask, setEditingTask] = useState(null);
  const [editedTitle, setEditedTitle] = useState('');
  const [editedDetails, setEditedDetails] = useState('');
  const [editedDateTime, setEditedDateTime] = useState('');

  // Load tasks from localStorage and merge with default tasks
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    if (savedTasks.length === 0) {
      // No tasks in localStorage, initialize with default tasks
      setTasks(defaultTasks);
      localStorage.setItem('tasks', JSON.stringify(defaultTasks));
    } else {
      // Merge saved tasks with any missing default tasks
      const mergedTasks = [...savedTasks];
      defaultTasks.forEach((defaultTask) => {
        if (!savedTasks.find(task => task.id === defaultTask.id)) {
          mergedTasks.push(defaultTask);
        }
      });
      setTasks(mergedTasks);
      localStorage.setItem('tasks', JSON.stringify(mergedTasks));
    }
  }, []);

  const handleDelete = (taskId) => {
    const taskToDelete = tasks.find((task) => task.id === taskId);
    setDeletedTask(taskToDelete);
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const handleUndoDelete = () => {
    if (deletedTask) {
      const updatedTasks = [...tasks, deletedTask];
      setTasks(updatedTasks);
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      setDeletedTask(null);
    }
  };

  const startEditing = (task) => {
    setEditingTask(task.id);
    setEditedTitle(task.title);
    setEditedDetails(task.details);
    setEditedDateTime(task.dateTime);
  };

  const saveEdit = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, title: editedTitle, details: editedDetails, dateTime: editedDateTime } : task
    );
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    setEditingTask(null);
  };

  const cancelEdit = () => {
    setEditingTask(null);
  };

  const toggleDetails = (taskId) => {
    setTasks(tasks.map((task) =>
      task.id === taskId ? { ...task, showDetails: !task.showDetails } : task
    ));
  };

  const sortTasksAlphabetically = () => {
    const sortedTasks = [...tasks].sort((a, b) => a.title.localeCompare(b.title));
    setTasks(sortedTasks);
  };

  const sortTasksByDateTime = () => {
    const sortedTasks = [...tasks].sort((a, b) => new Date(a.dateTime) - new Date(b.dateTime));
    setTasks(sortedTasks);
  };

  const containerStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
    width: '400px',
    textAlign: 'center',
  };

  const buttonStyle = {
    backgroundColor: '#a370f0',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    padding: '10px 20px',
    margin: '10px',
    fontSize: '16px',
    cursor: 'pointer',
  };

  const sortButtonStyle = {
    backgroundColor: '#555',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    padding: '10px',
    margin: '5px',
    fontSize: '14px',
    cursor: 'pointer',
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundImage: 'url(/background.png)', backgroundSize: 'cover' }}>
      <div style={containerStyle}>
        <h2>Task List Page</h2>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {tasks.map((task) => (
            <li key={task.id} style={{ marginBottom: '10px', backgroundColor: '#f3f3f3', padding: '10px', borderRadius: '8px' }}>
              {editingTask === task.id ? (
                <div>
                  <input
                    type="text"
                    value={editedTitle}
                    onChange={(e) => setEditedTitle(e.target.value)}
                    style={{ width: '100%', padding: '8px', marginBottom: '5px', borderRadius: '5px' }}
                  />
                  <textarea
                    value={editedDetails}
                    onChange={(e) => setEditedDetails(e.target.value)}
                    style={{ width: '100%', padding: '8px', borderRadius: '5px' }}
                  />
                  <input
                    type="datetime-local"
                    value={editedDateTime}
                    onChange={(e) => setEditedDateTime(e.target.value)}
                    style={{ width: '100%', padding: '8px', borderRadius: '5px', marginTop: '5px' }}
                  />
                  <button style={buttonStyle} onClick={() => saveEdit(task.id)}>Save</button>
                  <button style={{ ...buttonStyle, backgroundColor: '#ccc', color: '#333' }} onClick={cancelEdit}>Cancel</button>
                </div>
              ) : (
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <strong>{task.title}</strong> <br />
                    <small>{new Date(task.dateTime).toLocaleString()}</small>
                    <button onClick={() => toggleDetails(task.id)} style={{ border: 'none', background: 'none', cursor: 'pointer', fontSize: '16px' }}>
                      {task.showDetails ? '▲' : '▼'}
                    </button>
                    {task.showDetails && (
                      <div style={{ marginTop: '5px', fontSize: '14px', color: '#555' }}>{task.details}</div>
                    )}
                  </div>
                  <div>
                    <button
                      style={{ ...buttonStyle, backgroundColor: '#ff4d4d', marginRight: '5px' }}
                      onClick={() => handleDelete(task.id)}
                    >
                      Delete
                    </button>
                    <button style={{ ...buttonStyle, width: '60px' }} onClick={() => startEditing(task)}>Edit</button>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        {deletedTask && (
          <div style={{ marginTop: '15px' }}>
            <button
              style={{ backgroundColor: '#ff4d4d', color: 'white', borderRadius: '8px', padding: '10px 20px', cursor: 'pointer' }}
              onClick={handleUndoDelete}
            >
              Undo Delete
            </button>
          </div>
        )}

        <div style={{ marginTop: '20px' }}>
          <label style={{ fontWeight: 'bold', fontSize: '16px', marginRight: '10px' }}>Sort</label>
          <button style={sortButtonStyle} onClick={sortTasksAlphabetically}>A-Z</button>
          <button style={sortButtonStyle} onClick={sortTasksByDateTime}>By Date</button>
        </div>

        <button style={{ ...buttonStyle, marginTop: '20px' }} onClick={() => navigate('/add-task')}>Add New Task</button>
        <button style={{ ...buttonStyle, backgroundColor: '#555' }} onClick={() => navigate('/')}>Go Back Home</button>
      </div>
    </div>
  );
}

export default TaskListPage;
