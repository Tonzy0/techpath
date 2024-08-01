import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import UserSignUp from './pages/UserSignUp';
import UserLogin from './pages/UserLogin';
import MentorLogin from './pages/MentorLogin';
import MentorSignUp from './pages/MentorSignUp';
import UserDashboard from './pages/UserDashboard';
import MentorDashboard from './pages/MentorDashboard';


function App() {
  return (
    <Router>
      <Routes>
        {/* Define your routes here */}
        <Route path="/" element={<Home />} />
        <Route path="/UserSignUp" element={<UserSignUp />} />
        <Route path="/UserLogin" element={<UserLogin />} />
        <Route path="/MentorSignUp" element={<MentorSignUp />} />
        <Route path="/MentorLogin" element={<MentorLogin />} />
        <Route path="/UserDashboard" element={<UserDashboard />} />
        <Route path="/MentorDashboard" element={<MentorDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;