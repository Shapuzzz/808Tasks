// SettingsPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SettingsPage() {
  const navigate = useNavigate();
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);

  const toggleNotifications = () => {
    setNotificationsEnabled(!notificationsEnabled);
  };

  const containerStyle = {
    maxWidth: '500px',
    margin: 'auto',
    textAlign: 'center',
    padding: '40px',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: '12px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
  };

  const buttonStyle = {
    backgroundColor: '#a370f0',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '8px',
    margin: '15px 0',
    cursor: 'pointer',
    fontSize: '16px',
    width: '100%',
  };

  const toggleContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#e6e6e6',
    padding: '10px',
    borderRadius: '8px',
    margin: '20px 0',
  };

  const toggleLabelStyle = {
    fontWeight: 'bold',
    fontSize: '16px',
  };

  const toggleStyle = {
    position: 'relative',
    width: '50px',
    height: '24px',
    backgroundColor: notificationsEnabled ? '#a370f0' : '#ccc',
    borderRadius: '12px',
    cursor: 'pointer',
  };

  const toggleCircleStyle = {
    position: 'absolute',
    top: '2px',
    left: notificationsEnabled ? '26px' : '2px',
    width: '20px',
    height: '20px',
    backgroundColor: 'white',
    borderRadius: '50%',
    transition: 'left 0.3s',
  };

  return (
    <div style={containerStyle}>
      <h2>Settings</h2>
      <button style={buttonStyle}>Change Password</button>
      
      <div style={toggleContainerStyle}>
        <span style={toggleLabelStyle}>Notification</span>
        <div style={toggleStyle} onClick={toggleNotifications}>
          <div style={toggleCircleStyle}></div>
        </div>
      </div>
      
      <p style={{ fontSize: '14px', color: '#333', textAlign: 'left', marginTop: '10px' }}>
        Turning this on will send you an email 24 hours before each task.
      </p>
      <p style={{ fontSize: '14px', color: '#333', textAlign: 'left', marginBottom: '20px' }}>
        Turn on to continue receiving email reminders 24 hours before every task. Turn off to stop receiving email reminders.
      </p>

      <button 
        style={{ ...buttonStyle, backgroundColor: '#555' }}
        onClick={() => navigate('/')}
      >
        Go Back Home
      </button>
    </div>
  );
}

export default SettingsPage;
