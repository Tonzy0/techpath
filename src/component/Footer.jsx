import React from 'react';
import '../css/footer.css';

function footer() {
    return (
        <div>
            <footer className="footer">
                <p>&copy; 2024 TechPath. All rights reserved.</p>
                <div className="footer-links">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                </div>
                <div className="social-media">
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                </div>
            </footer>
        </div>
    );
}

export default footer;