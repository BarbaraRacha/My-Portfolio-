import React from 'react';
import { motion } from 'framer-motion'; // Import de Framer Motion
import projectsData from '../data/experiences.json';
import '../assets/styles/Experience.css';
import ProjectCard from "./ProjectCard";

const Experience = () => {

    return (
        <section className="projects-section">
            <motion.h1
                className="projects-title"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                Academic Internships
            </motion.h1>

            <motion.h1
                className="line"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            ></motion.h1>

            <motion.div
                className="projects-grid"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
            >
                {projectsData.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: index * 0.2 }} // Décalage progressif des cartes
                    >
                        <ProjectCard {...project} />
                    </motion.div>
                ))}
            </motion.div>

        </section>
    );
};

export default Experience;
