import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="hero" className="hero">
            <div className="container hero-container">
                <h1 className="hero-name">Gauransh Kate</h1>
                <h2 className="hero-title">Full Stack Java Developer</h2>
                <p className="hero-tagline">
                    Building scalable backend systems using Java, Spring Boot, and REST APIs.
                </p>
                <div className="hero-actions">
                    <a href="#projects" className="btn btn-primary">View Projects</a>
                    <a href="/resume.pdf" className="btn btn-outline" download>Download Resume</a>
                </div>
                <div className="hero-socials">
                    <a href="https://github.com/kategauransh" target="_blank" rel="noopener noreferrer" className="social-link">GitHub</a>
                    <a href="https://linkedin.com/in/gauransh-kate-gdk8815" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
