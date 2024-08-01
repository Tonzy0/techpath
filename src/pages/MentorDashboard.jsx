import React, { useState } from 'react';
import '../css/mentorDashboard.css';

function MentorDashboard() {
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
        </nav>
        <div className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
          <div className="sidebar-logo">Dashboard</div>
          <ul className="sidebar-menu">
            <li>Explore Tech News</li>
            <li>Homepage</li>
          </ul>
        </div>
        <div className={`main-content ${isSidebarOpen ? 'sidebar-open' : ''}`}>
          <div className="dashboard">
            <h1>Welcome, Mr Adrian.</h1>
            <h2>Discover the power of TechPath</h2>
            <div className="content">
              <div className="card">
                <h3>Explore Tech News</h3>
                <p>Stay ahead of the curve! Keep your finger on the pulse of the tech industry by regularly checking TechCrunch for the latest news, trends, and insights. This will help you provide valuable guidance and support to your mentees</p>
                <button>Explore</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};
export default MentorDashboard;