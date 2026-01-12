import React from 'react';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: "Redink – Document Printing & Delivery Platform",
            tech: ["Java", "Spring Boot", "AWS S3", "MySQL", "React"],
            details: [
                "Built backend cost calculator (color, sides, punch) for real-time pricing.",
                "Eliminated pricing errors and streamlined the checkout process.",
                "Implemented secure AWS S3 file upload integration for user documents.",
                "Developed an admin dashboard for efficient order handling.",
                "Reduced coordination delays by ~70%."
            ],
            link: "https://github.com/kategauransh/RedInk_final" // Add link if available
        },
        {
            title: "AI Transcriber – Speech-to-Text Platform",
            tech: ["Spring AI", "REST APIs", "Java", "React"],
            details: [
                "Backend transcription service utilizing Spring AI integration.",
                "Exposed REST APIs for seamless audio upload and transcript retrieval.",
                "Achieved 90%+ transcription accuracy for clear audio inputs.",
                "Improved service usability by 60% through automated processing."
            ],
            link: "https://github.com/kategauransh/Springboot-AI_powerded_Transcriber" // Add link if available
        }
    ];

    return (
        <section id="projects" className="section projects">
            <div className="container">
                <h2 className="section-title">Featured Projects</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card card">
                            <h3 className="project-title">{project.title}</h3>
                            <div className="project-tech">
                                {project.tech.map((t, i) => (
                                    <span key={i} className="tech-tag">{t}</span>
                                ))}
                            </div>
                            <ul className="project-details">
                                {project.details.map((detail, i) => (
                                    <li key={i}>{detail}</li>
                                ))}
                            </ul>
                            <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">View Project &rarr;</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
