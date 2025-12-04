import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import classNames from "classnames";
import "../assets/styles/global.css";

const Navbar = () => {
    const [activeLink, setActiveLink] = useState("");
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const navRef = useRef(null);

    useEffect(() => {
        setActiveLink(location.pathname.replace("/", "") || "home");
    }, [location]);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // Fermer le menu en cliquant en dehors
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Fermer le menu en redimensionnant l'écran
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setMenuOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Gérer le focus lorsque le menu est ouvert
    useEffect(() => {
        if (menuOpen) {
            const firstLink = navRef.current.querySelector(".nav-links a");
            if (firstLink) {
                firstLink.focus();
            }
        }
    }, [menuOpen]);

    return (
        <nav className="navbar" ref={navRef}>
            <div className="logo">Barbara Racha !</div>

            {/* Menu burger pour mobile */}
            <div
                className="burger-menu"
                onClick={toggleMenu}
                aria-label="Toggle menu"
                aria-expanded={menuOpen}
                role="button"
                tabIndex={0}
            >
                {menuOpen ? <FaTimes /> : <FaBars />}
            </div>

            <ul
                className={classNames("nav-links", { open: menuOpen })}
                role="menu"
                aria-hidden={!menuOpen}
            >
                {["home", "about", "education", "experience", "projects", "contact"].map((link) => (
                    <li key={link} role="menuitem">
                        <Link
                            to={`/${link === "home" ? "" : link}`}
                            className={activeLink === link ? "active" : ""}
                            onClick={() => {
                                setActiveLink(link);
                                setMenuOpen(false);
                            }}
                            tabIndex={menuOpen ? 0 : -1}
                        >
                            {link.toUpperCase()}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;