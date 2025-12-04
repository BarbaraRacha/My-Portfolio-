import React, { useState } from 'react';
import '../assets/styles/Contact.css';
import { motion } from "framer-motion";


const API_BASE_URL = process.env.REACT_APP_API_URL;

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');

        try {
            const response = await fetch(`${API_BASE_URL}/contact`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('Message sent successfully!');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus('Error during sending.');
            }
        } catch (error) {
            setStatus('Network error.');
        }
    };

    return (
        <motion.section className="contact"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
        >
            <div className="contact-container">
                <h2>Contact Me</h2>
                <p>Send me a message and I will reply as soon as possible!</p>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                    <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
                    <textarea name="message" placeholder="Your Message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
                    <button type="submit">Send</button>
                    <p className="status-message">{status}</p>
                </form>
            </div>
        </motion.section>
    );
};

export default Contact;
