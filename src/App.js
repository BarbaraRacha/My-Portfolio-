import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './assets/styles/global.css';
import Footer from "./components/Footer";
import Skills from "./components/Skills";

const App = () => {
    return (
        <Router>
            <div style={{backgroundColor: "beige", height: "100vh"}}>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/education" element={<Education/>}/>
                    <Route path="/experience" element={<Experience/>}/>
                    <Route path="/projects" element={<Projects/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/skills" element={<Skills/>}/>
                </Routes>
            </div>
            <Footer/>
        </Router>

    );
};

export default App;