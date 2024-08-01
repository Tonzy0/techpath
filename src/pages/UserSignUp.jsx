import React from 'react';
import '../css/userSignUpForm.css';

function UserSignUp() {
  return (
    <div className="Signup">
      <nav className="navbar">
        <div className='nav-brand'>TECHPATH</div> 
      </nav>
      <div className="signup-container">
        <div className="signup-box">
        <h2>Sign Up</h2>
        <form className="signup-form">
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Re-Type Password" required />
          <div className="checkbox-container">
            <input type="checkbox" id="terms" required />
            <label htmlFor="terms">I accept Privacy, Policy and Terms</label>
          </div>
          <button type="submit" className="signup-button">Sign Up</button>
        </form>
      </div>
     </div>
    </div>
  );
};
export default UserSignUp;