import React, { useState } from 'react';
import '../css/userDashboard.css';

function UserDashboard() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };
  
    return (
      <div className="dashboard-container">
        <nav className="navbar">
          <button className="toggle-button" onClick={toggleSidebar}>
            ☰
          </button>
          <div className="navbar-brand">TECHPATH</div>
          <div className="search-box">
            <input type="text" placeholder="Find Mentor" />
          </div>
        </nav>
        <div className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
          <div className="sidebar-logo">Dashboard</div>
          <ul className="sidebar-menu">
            <li>Find Mentor</li>
            <li>Career Options</li>
            <li>Homepage</li>
          </ul>
        </div>
        <div className={`main-content ${isSidebarOpen ? 'sidebar-open' : ''}`}>
          <div className="dashboard">
            <h1>Welcome, Adrian.</h1>
            <h2>Discover the power of TechPath</h2>
            <div className="content">
              <div className="card">
                <h3>Find Mentor</h3>
                <p>Connect with experienced professionals in your desired field and gain valuable insights to shape your career. Find your perfect match today and start unlocking your full potential!</p>
                <button>Get Started</button>
              </div>
              <div className="card">
                <h3>Career Options</h3>
                <p>Explore the vast landscape of tech careers and discover your dream job. Browse list of career paths and start planning your future today!</p>
                <button>Explore</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};
  
  export default UserDashboard;