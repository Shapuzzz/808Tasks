
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import SettingsPage from './pages/SettingsPage';
import TaskListPage from './pages/TaskListPage';
import AddTaskPage from './pages/AddTaskPage';

import './App.css';  // Import the global CSS for the background image

function App() {
  return (
    <Router>
      <div className="app-background"> {/* Apply background to all pages */}
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/profile" component={ProfilePage} />
          <Route path="/settings" component={SettingsPage} />
          <Route path="/tasks" component={TaskListPage} />
          <Route path="/add-task" component={AddTaskPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
