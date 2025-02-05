import { useRef } from "react";
import { motion } from "framer-motion";
import "../assets/styles/About.css";
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function About() {
    const aboutRef = useRef(null);

    return (
        <section className="about-section">
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
                        from Ecole Normale Superieur d'Enseignement Technique at Mohammedia-Morocco with a Master
                        degree in Distributed Systemes and Artificial Intelligence.
                        I'm most passionate about giving back to the community, and my goal is to pursue this
                        passion within the field of software engineering.
                        In my free time, I like working on open source projects.
                    </p>

                    <a href="../assets/files/resume.pdf" className="resume-button">
                        <FontAwesomeIcon icon={faDownload} className="icon"/> Resume
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
