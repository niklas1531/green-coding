/* This is the navbar, i.e. the upper area of the website in which all 
links to other sections/pages are linked. This is a component 
that can be found on every (sub)page.*/
import React, { useEffect, useState } from 'react';
import logo from './logo.svg'
import './navbar.css'
import { HashLink } from 'react-router-hash-link';
function Navbar() {

    const storedDarkMode = localStorage.getItem("DARK_MODE");
    const [darkMode, setDarkMode] = useState(storedDarkMode);
    const toggleDarkMode = () => setDarkMode((darkMode === "light") ? "dark" : "light");

    useEffect(() => {
        localStorage.setItem("DARK_MODE", darkMode);
        if (darkMode === "light") {
            setLightTheme();
        } else if (darkMode === "dark") {
            setDarkTheme();
        }
    }, [darkMode]);


    function setDarkTheme() {
        document.body.setAttribute("data-theme", "dark-theme")
    }

    function setLightTheme() {
        document.body.setAttribute("data-theme", "light-theme")
    }

    return (
        <nav class="navbar navbar-expand-lg ">
            <HashLink class="navbar-brand" to="/#">

                <img class="logo-image" src={logo} align="left" alt='logo' />
                <h3>Green Coding</h3>
            </HashLink>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fa-solid fa-bars toggler"></i>
            </button>


            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <HashLink class="nav-link" smooth to='/#'>HOME</HashLink>
                    </li>
                    <li class="nav-item">
                        <HashLink class="nav-link" smooth to='/#about'>ABOUT</HashLink>
                    </li>
                    <li class="nav-item">
                        <HashLink class="nav-link" smooth to="/#kpis">KPI</HashLink>
                    </li>
                    <li className="nav-item">
                        <HashLink class="nav-link" smooth to="/quiz/#">QUIZ</HashLink>
                    </li>
                    <li class="nav-item">
                        <HashLink class="nav-link" smooth to="/#team">TEAM</HashLink>
                    </li>
                    <li class="nav-item">
                        <HashLink class="nav-link" smooth to="/#contact">CONTACT</HashLink>

                    </li>
                    <li class="nav-item">
                        <button id="dark-mode-btn" class=" nav-link dark-mode-btn">
                            <i id="dark-mode-icon" onClick={toggleDarkMode} class="fa-solid fa-moon"></i>
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar