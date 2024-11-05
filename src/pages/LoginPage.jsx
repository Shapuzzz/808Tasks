// LoginPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();

  function handleLogin() {
    navigate('/');
  }

  const pageContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundImage: 'url(/background.png)',
    backgroundSize: 'cover',
  };

  const splitContainerStyle = {
    display: 'flex',
    width: '80%',
    maxWidth: '1000px',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
  };

  const leftPanelStyle = {
    flex: 1,
    padding: '40px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#f3f3f3',
  };

  const rightPanelStyle = {
    flex: 1,
    padding: '40px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  };

  const buttonStyle = {
    backgroundColor: '#a370f0',
    color: 'white',
    padding: '10px',
    width: '100%',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    marginTop: '10px',
  };

  const linkStyle = {
    color: '#a370f0',
    textDecoration: 'none',
    margin: '0 5px',
  };

  return (
    <div style={pageContainerStyle}>
      <div style={splitContainerStyle}>
        {/* Left Panel */}
        <div style={leftPanelStyle}>
          <h2>Welcome</h2>
          <p>
            Start using (808)Tasks to manage and take control over your life! This helps with organizing and reminding
            yourself of tasks. (808)Tasks was made to be simple to use while having all the features that are needed to
            organize like creating tasks, editing tasks, deleting tasks, and undo accidental deletion of tasks!
          </p>
        </div>

        {/* Right Panel */}
        <div style={rightPanelStyle}>
          <h2>Sign In</h2>
          <input type="text" placeholder="Email or Username" style={inputStyle} />
          <input type="password" placeholder="Password" style={inputStyle} />
          <button onClick={handleLogin} style={buttonStyle}>
            Sign In
          </button>
          <div style={{ marginTop: '10px' }}>
            <a href="#" style={linkStyle}>
              Forgot password?
            </a>{' '}
            |{' '}
            <a href="#" style={linkStyle}>
              Register
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
