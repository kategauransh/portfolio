import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <p>&copy; {new Date().getFullYear()} Gauransh Kate. All rights reserved.</p>
                <p className="built-with">Built with React & Vanilla CSS</p>
            </div>
        </footer>
    );
};

export default Footer;
