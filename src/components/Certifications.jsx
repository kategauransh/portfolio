import React from 'react';
import './Certifications.css';

const Certifications = () => {
    const certs = [
        { name: "Java Full Stack Development", issuer: "Naresh IT", year: "2025" },
        { name: "Microsoft Data Analysis", issuer: "Microsoft", year: "2024" },
        { name: "HackerRank Java Programming", issuer: "HackerRank", year: "2025" },
        { name: "HackerRank SQL", issuer: "HackerRank", year: "2024" }
    ];

    return (
        <section id="certifications" className="section certifications">
            <div className="container">
                <h2 className="section-title">Certifications & Achievements</h2>
                <div className="certs-grid">
                    {certs.map((cert, index) => (
                        <div key={index} className="cert-card card">
                            <h3>{cert.name}</h3>
                            <p className="issuer">{cert.issuer} • {cert.year}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
