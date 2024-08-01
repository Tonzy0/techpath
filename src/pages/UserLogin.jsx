import React from 'react';
import '../css/userLogin.css'

function UserLogin() {
    return (
        <div className="Login">
      <nav className="navbar">
        <div className='nav-brand'>TECHPATH</div> 
      </nav>
      <div className="login-container">
        <div className="login-box">
        <h2>Login</h2>
        <form className="login-form">
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
     </div>
    </div>
    );
};

export default UserLogin;