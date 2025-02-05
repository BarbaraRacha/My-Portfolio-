import React from 'react';
import { motion } from 'framer-motion';
import '../assets/styles/Home.css';

const Home = () => {
    return (
        <section className="home">
            <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                I am Barbara Racha !
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                FullStack Developer & Data Scientist passionate about exploring new technologies and sharing knowledge
                through technical projects. Always learning and exploring to stay updated with the latest tech trends !
            </motion.p>

            <motion.div
                className="social-icons-home"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
            >
                <a href="https://linkedin.com/in/racha-barbara-b8b92a223" target="_blank" rel="noopener noreferrer" className="linkedin-icon">
                    <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn"/>
                </a>
                <a href="https://github.com/BarbaraRacha" target="_blank" rel="noopener noreferrer" className="github-icon">
                    <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub"/>
                </a>
                <a href="https://www.facebook.com/racha.anouar.5" target="_blank" rel="noopener noreferrer" className="facebook-icon">
                    <img src="https://cdn-icons-png.flaticon.com/512/124/124010.png" alt="Facebook"/>
                </a>
            </motion.div>
        </section>
    );
};

export default Home;
