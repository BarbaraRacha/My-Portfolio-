import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion'; // Import de Framer Motion
import { useLocation } from 'react-router-dom';
import '../assets/styles/Education.css';
import educationData from "../data/education.json";

const Education = () => {
    const experienceSectionRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
        if (location.hash === '#experience') {
            setTimeout(() => {
                experienceSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
    }, [location]);

    return (
        <section className="education-section">
            <motion.div
                className="education-container"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <motion.h1
                    className="education-title"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    My Education
                </motion.h1>

                <motion.h1
                    className="line2"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                ></motion.h1>

                <motion.div
                    className="timeline"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2 }}
                >
                    {educationData.map((edu, index) => (
                        <motion.div
                            key={index}
                            className="timeline-item"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, delay: index * 0.2 }} // Décalage progressif
                        >
                            <div className="timeline-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22 10L12 5L2 10L12 15L22 10ZM22 10V14" stroke="white" strokeWidth="2"
                                          strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M6 12V17C6 17 8.5 19 12 19C15.5 19 18 17 18 17V12" stroke="white"
                                          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <div className="timeline-content">
                                <div className="date-badge">{edu.period}</div>
                                <h2 className="degree">{edu.degree}</h2>
                                <p className="institution">{edu.institution}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>

        </section>
    );
};

export default Education;
