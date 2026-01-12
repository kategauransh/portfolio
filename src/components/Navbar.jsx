import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="container navbar-container">
                <a href="#hero" className="logo">GK.</a>

                <div className={`nav-links ${isOpen ? 'active' : ''}`}>
                    <a href="#about" onClick={() => setIsOpen(false)}>About</a>
                    <a href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
                    <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
                    <a href="#certifications" onClick={() => setIsOpen(false)}>Certifications</a>
                    <a href="#education" onClick={() => setIsOpen(false)}>Education</a>
                    <a href="#contact" onClick={() => setIsOpen(false)} className="btn-nav">Contact</a>
                </div>

                <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
