import React from 'react';
import './Skills.css';

const Skills = () => {
    const skillGroups = [
        {
            category: "Programming & Querying",
            skills: ["Java", "Java 8", "Stream API", "Oracle", "SQL"]
        },
        {
            category: "Frameworks & Tools",
            skills: ["Spring Boot", "React", "HTML", "CSS", "Bootstrap", "Git"]
        },
        {
            category: "Backend & Development",
            skills: ["RESTful API Design", "Performance Optimization", "Debugging", "Agile / Scrum"]
        }
    ];

    return (
        <section id="skills" className="section skills">
            <div className="container">
                <h2 className="section-title">Technical Skills</h2>
                <div className="skills-grid">
                    {skillGroups.map((group, index) => (
                        <div key={index} className="skill-card card">
                            <h3>{group.category}</h3>
                            <ul className="skill-list">
                                {group.skills.map((skill, i) => (
                                    <li key={i}>{skill}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
