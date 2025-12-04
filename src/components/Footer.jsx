import React from "react";
import { motion } from "framer-motion";
import "../assets/styles/Footer.css";

const Footer = () => {
    return (
        <motion.footer
            className="footer"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
        >
            <div className="footer-container">
                <div className="left">
                    <p><span className="name-highlight">Portfolio By Barbara Racha !</span></p>
                </div>
                <div className="social-icons">
                    <a href="https://linkedin.com/in/racha-barbara-b8b92a223" target="_blank" rel="noopener noreferrer">
                        <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn"/>
                    </a>
                    <a href="https://www.instagram.com/rachabarbara" target="_blank" rel="noopener noreferrer">
                        <img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" alt="Instagram"/>
                    </a>
                    <a href="https://www.facebook.com/racha.anouar.5" target="_blank" rel="noopener noreferrer">
                        <img src="https://cdn-icons-png.flaticon.com/512/124/124010.png" alt="Facebook"/>
                    </a>
                    <a href="https://github.com/BarbaraRacha" target="_blank" rel="noopener noreferrer">
                        <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub"/>
                    </a>
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                        <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter"/>
                    </a>
                </div>
            </div>
        </motion.footer>
    );
};

export default Footer;
