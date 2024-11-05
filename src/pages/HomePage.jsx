// HomePage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();
  const [showLogoutPrompt, setShowLogoutPrompt] = useState(false);

  const appBackgroundStyle = {
    backgroundImage: 'url(/background.png)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#333'
  };

  const containerStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
    width: '400px',
    textAlign: 'center'
  };

  const buttonStyle = {
    backgroundColor: '#a370f0',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    padding: '15px',
    width: '140px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    margin: '10px'
  };

  const handleLogout = () => {
    setShowLogoutPrompt(true);
  };

  const confirmLogout = () => {
    // Redirect to login page or perform logout actions
    navigate('/login');
  };

  return (
    <div style={appBackgroundStyle}>
      <div style={containerStyle}>
        <h2>Welcome, Shuhie35</h2>
        <div style={{ fontSize: '14px', color: '#333', margin: '15px 0', padding: '10px', backgroundColor: 'rgba(255, 255, 255, 0.8)', border: '1px solid #ccc', borderRadius: '8px', textAlign: 'left' }}>
          Start using (808)Tasks to manage and take control over your life! 
          This helps with organizing and reminding yourself of tasks. 
          (808)Tasks was made to be simple to use while having all the features 
          that are needed to organize like creating tasks, editing tasks, 
          deleting tasks, and undo accidental deletion of tasks!
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
          <button style={buttonStyle} onClick={() => navigate('/profile')}>Profile</button>
          <button style={buttonStyle} onClick={() => navigate('/tasks')}>Task</button>
          <button style={buttonStyle} onClick={() => navigate('/settings')}>Settings</button>
          <button style={buttonStyle} onClick={handleLogout}>Log Out</button>
        </div>
      </div>

      {showLogoutPrompt && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex',
          alignItems: 'center', justifyContent: 'center'
        }}>
          <div style={{
            backgroundColor: 'white', padding: '20px', borderRadius: '8px',
            width: '300px', textAlign: 'center', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)'
          }}>
            <h3>Log Out?</h3>
            <p>Are you sure you want to log out?</p>
            <button
              style={{ ...buttonStyle, width: '100px', margin: '10px', backgroundColor: '#a370f0', color: 'white' }}
              onClick={confirmLogout}
            >
              Log Out
            </button>
            <button
              style={{ ...buttonStyle, width: '100px', margin: '10px', backgroundColor: '#ccc', color: '#333' }}
              onClick={() => setShowLogoutPrompt(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default HomePage;
