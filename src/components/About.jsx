import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="section about">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div className="about-content">
                    <p className="about-text">
                        I am a <strong>Java Full Stack Developer</strong> with a strong focus on backend development.
                        My expertise lies in building scalable systems using <strong>Spring Boot, REST APIs, and SQL</strong>.
                        I have hands-on experience with <strong>AWS S3</strong> for secure file handling and proficient in
                        performance optimization and clean architecture.
                    </p>
                    <p className="about-text">
                        I am passionate about solving complex problems and delivering efficient, high-quality code.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
