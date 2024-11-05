// ProfilePage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

function ProfilePage() {
  const navigate = useNavigate();

  const containerStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
    width: '400px',
    textAlign: 'center',
  };

  const labelStyle = {
    display: 'block',
    fontWeight: 'bold',
    marginBottom: '5px',
    color: '#333',
    textAlign: 'left',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    borderRadius: '8px',
    border: '1px solid #ccc',
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
    width: '100%',
    maxWidth: '160px',
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundImage: 'url(/background.png)', backgroundSize: 'cover' }}>
      <div style={containerStyle}>
        <h2>Profile Page</h2>
        <div style={{ marginBottom: '15px' }}>
          <label style={labelStyle} htmlFor="name">Name</label>
          <input type="text" id="name" style={inputStyle} defaultValue="Shuhie Renacia" />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={labelStyle} htmlFor="phone">Phone</label>
          <input type="text" id="phone" style={inputStyle} defaultValue="(808)123-1234" />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={labelStyle} htmlFor="email">Email</label>
          <input type="email" id="email" style={inputStyle} defaultValue="renacias@oregonstate.edu" />
        </div>
        <button style={buttonStyle}>Submit Changes</button>
        <button style={buttonStyle} onClick={() => navigate('/')}>Go Back Home</button>
      </div>
    </div>
  );
}

export default ProfilePage;
