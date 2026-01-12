import React from 'react';
import './Education.css';

const Education = () => {
    return (
        <section id="education" className="section education">
            <div className="container">
                <h2 className="section-title">Education</h2>
                <div className="education-card card">
                    <h3>B.E. in Information Technology</h3>
                    <p className="school">Smt. Kashibai Navale College of Engineering, Pune</p>
                    <div className="edu-details">
                        <span className="year">2025</span>
                        <span className="cgpa">CGPA: 6.97 / 10</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
