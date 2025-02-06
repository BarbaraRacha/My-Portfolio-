import { motion } from "framer-motion";
import "../assets/styles/Skills.css";
import skillsData from "../data/skills.json";

export default function Skills() {
    return (
        <motion.section
            id="skills"
            className="skills-section"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <h2 className="skills-title">My Skills</h2>
            <div className="skills-grid">
                {Object.entries(skillsData).map(([category, skills]) => (
                    <motion.div
                        key={category}
                        className="skill-category"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <h3 className="category-title">{category}</h3>
                        <ul className="skills-list">
                            {skills.map(skill => (
                                <li key={skill} className="skill-item">{skill}</li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
}
