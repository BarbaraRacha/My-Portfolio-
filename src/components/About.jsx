import { useRef } from "react";
import { motion } from "framer-motion";
import "../assets/styles/About.css";
import { faDownload, faCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Skills from "./Skills";

export default function About() {
    const aboutRef = useRef(null);
    const skillsRef = useRef(null);

    const scrollToSkills = () => {
        if (skillsRef.current) {
            skillsRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section>
            <div className="about-section">
                <div ref={aboutRef} id="about" className="about-container">
                    <motion.img
                        src="/images/profile.png"
                        alt="Profile"
                        className="about-image"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                    />

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="about-text"
                    >
                        <h2 className="about-title">About Me</h2>
                        <p className="about-paragraph">
                            My name is <span className="highlight">Barbara Racha</span>. I'm a future graduate
                            from Ecole Normale Supérieure d'Enseignement Technique at Mohammedia, Morocco with a
                            Master's degree in Distributed Systems and Artificial Intelligence.
                            I'm passionate about giving back to the community, and my goal is to pursue this
                            passion within the field of software engineering.
                            In my free time, I enjoy working on open-source projects.
                        </p>

                        <div className="buttons">
                            <a href="/files/resume.pdf" className="resume-button" download>
                                <FontAwesomeIcon icon={faDownload} className="icon"/> Resume
                            </a>

                            <button onClick={scrollToSkills} className="resume-button">
                                <FontAwesomeIcon icon={faCode} className="icon"/> Tech - Skills
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Ajout de la référence à Skills */}
            <div ref={skillsRef}>
                <Skills />
            </div>
        </section>
    );
}
