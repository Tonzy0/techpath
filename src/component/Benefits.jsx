import React from 'react'
import '../css/benefits.css';

function benefits() {
    return (
        <section className="benefits">
        <h2>Discover the power of TechPath</h2>
        <div className="benefits-cards">
          <div className="benefits-card">
            <img src="benefit1.jpg" alt="Benefit 1" />
            <h3>Exceptional mentors</h3>
            <p>Connect with industry experts and gain insights into the tech world.</p>
          </div>
          <div className="benefits-card">
            <img src="benefit2.jpg" alt="Benefit 2" />
            <h3>Personalized sessions</h3>
            <p>Book one-on-one sessions tailored to your career goals.</p>
          </div>
          <div className="benefits-card">
            <img src="benefit3.jpg" alt="Benefit 3" />
            <h3>Comprehensive guidance</h3>
            <p>Explore various tech career options and find your ideal path.</p>
          </div>
        </div>
        </section>
    );
}

export default benefits;