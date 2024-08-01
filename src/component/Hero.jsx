import React from 'react'
import '../css/hero.css';

function hero() {
    return (
        <section className="hero">
          <div className="hero-content">
            <h1>Explore, Connect, Succeed: Your Tech Career Starts Here</h1>
            <p>
              Take the first step towards a fulfilling tech career with our innovative career counseling system. Our platform offers a unique opportunity to connect with experienced mentors, explore various career paths, and book personalized sessions to achieve your goals. Join our community of aspiring tech professionals and start building your dream career today!
            </p>
            <div className="hero-buttons">
              <button className="hero-button">Sign up as User</button>
              <button className="hero-button">Sign up as Mentor</button>
            </div>
          </div>
        </section>
    );
}

export default hero;