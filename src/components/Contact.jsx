import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="section contact">
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>
                <div className="contact-content card">
                    <p className="contact-intro">
                        I am currently open to full-time opportunities as a Java Full Stack Developer.
                        Feel free to reach out!
                    </p>
                    <div className="contact-links">
                        <a href="mailto:gauranshkate.it@gmail.com" className="contact-item">
                            <span className="label">Email</span>
                            <span className="value">gauranshkate.it@gmail.com</span>
                        </a>
                        <a href="tel:+918815383700" className="contact-item">
                            <span className="label">Phone</span>
                            <span className="value">+91 8815383700</span>
                        </a>
                        <a href="https://linkedin.com/in/gauransh-kate-gdk8815" target="_blank" rel="noopener noreferrer" className="contact-item">
                            <span className="label">LinkedIn</span>
                            <span className="value">linkedin.com/in/gauransh-kate-gdk8815</span>
                        </a>
                        <a href="https://github.com/kategauransh" target="_blank" rel="noopener noreferrer" className="contact-item">
                            <span className="label">GitHub</span>
                            <span className="value">github.com/kategauransh</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
