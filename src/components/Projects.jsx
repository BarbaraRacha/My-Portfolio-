import React, { useState } from "react";
import "../assets/styles/Projects.css";
import projectsData from "../data/projects.json";
import aiProjectsData from "../data/aiProjects.json";
import { motion } from "framer-motion";

const Projects = () => {
    return (
        <section className="projects-container-p">
            <motion.h1 className="projects-title-p"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                FullStack Projects
            </motion.h1>
            <motion.h1
                className="line3"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            ></motion.h1>
            <motion.div className="projects-grid-p"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2 }}
            >
                {projectsData.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </motion.div>

            <motion.h1
                className="projects-title-p ai-project-title"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                AI Projects
            </motion.h1>
            <motion.h1
                className="line4"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            ></motion.h1>
            <motion.div className="projects-grid-p"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2 }}
            >
                {aiProjectsData.map((project, index) => (
                    <ProjectCard key={index} project={project} isAiProject={true} />
                ))}
            </motion.div>
        </section>
    );
};

// Composant générique pour afficher les images et gérer le carrousel
const ProjectCard = ({ project, isAiProject = false }) => {
    const [currentImage, setCurrentImage] = useState(0);
    const [fade, setFade] = useState(true);

    const nextImage = () => {
        setFade(false);
        setTimeout(() => {
            setCurrentImage((prev) => (prev + 1) % project.images.length);
            setFade(true);
        }, 200); // Petit délai pour un effet fluide
    };

    const prevImage = () => {
        setFade(false);
        setTimeout(() => {
            setCurrentImage((prev) => (prev - 1 + project.images.length) % project.images.length);
            setFade(true);
        }, 200);
    };

    return (
        <div className="project-card-p">
            <h3>{isAiProject ? project.titleAI : project.title}</h3> <br />
            <div className="project-images-p">
                <button className="image-nav-p left" onClick={prevImage}>
                    &#9664;
                </button>
                <img
                    src={project.images[currentImage]}
                    alt={`${isAiProject ? project.titleAI : project.title} ${currentImage}`}
                    className={`gallery-image-p ${fade ? "fade-in" : "fade-out"}`}
                />
                <button className="image-nav-p right" onClick={nextImage}>
                    &#9654;
                </button>
            </div>
            <br />
            <p>{isAiProject ? project.descriptionAI : project.description}</p>
            <br />
            <div className="project-languages-p">
                {Object.entries(isAiProject ? project.languagesAI : project.languages).map(
                    ([lang, value], index) => (
                        <span key={index} className="language-item-p">
                            <span className="language-name-p"></span>
                            {value} .
                        </span>
                    )
                )}
            </div>
        </div>
    );
};

export default Projects;
