import React, { useState } from "react";
//import { FaBuilding } from 'react-icons/fa';

const GithubIcon = () => (
    <svg viewBox="0 0 16 16" fill="currentColor">
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
    </svg>
);
const LocationIcon = () => (
    <svg viewBox="0 0 16 16" fill="currentColor">
        <path d="M8 0c-2.21 0-4 1.79-4 4 0 2.21 4 8 4 8s4-5.79 4-8c0-2.21-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
    </svg>
);


const ProjectCard = ({ title, company, description, languages, lastUpdate, mode, images }) => {
    const [currentImage, setCurrentImage] = useState(0);
    const [fade, setFade] = useState(true);

    const nextImage = () => {
        setFade(false);
        setTimeout(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
            setFade(true);
        }, 200); // Petit délai pour un effet fluide
    };

    const prevImage = () => {
        setFade(false);
        setTimeout(() => {
            setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
            setFade(true);
        }, 200);
    };

    return (
        <div className="project-card">
            <div className="project-content">
                <div className="project-text">
                    <h2 className="project-title">{title}</h2>
                    {/*<h2 className="project-company">
                        <FaBuilding size={30} color="#000" />
                          {company}
                    </h2>*/}
                    <p className="project-description">{description}</p>

                    <div className="project-buttons">
                        <button className="project-button">
                            <GithubIcon/> Clone Project
                        </button>
                        <button className="project-button">
                            <GithubIcon/> Repo
                        </button>
                    </div>

                    <div className="project-languages">
                        {/*<span className="languages-prefix" ></span>*/}
                        {Object.entries(languages).map(([lang, value], index) => (
                            <span key={index} className="language-item">
                                <span className="language-name">{lang}: </span>
                                {value} %
                            </span>
                        ))}
                    </div>
                </div>
                <div className="project-footer">
                    <div className="stars-container">
                        <LocationIcon/>
                        <span>{mode}</span>
                    </div>
                    <span className="update-date"> {lastUpdate}</span>
                </div>
            </div>
            <div className="project-c2">
                <div className="project-images">
                    <button className="image-nav left" onClick={prevImage}>&#9664;</button>
                    <img
                        src={images[currentImage]}
                        alt={`${title} ${currentImage}`}
                        className={`gallery-image ${fade ? 'fade-in' : 'fade-out'}`}
                    />
                    <button className="image-nav right" onClick={nextImage}>&#9654;</button>
                </div>
            </div>

        </div>
    );
};

export default ProjectCard;