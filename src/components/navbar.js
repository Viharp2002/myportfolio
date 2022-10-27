import React from 'react';
import { Link } from 'react-router-dom';
import "../css/navbar.css";
import img from "../images/logo.jpg";

const Navbar = () => {

    const handleClick = ()=>{

        const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    const links = document.querySelectorAll(".nav-links li");
        //Animate Links
         navLinks.classList.toggle("open");
         links.forEach(link => {
             link.classList.toggle("fade");
         });
     
         //Hamburger Animation
         hamburger.classList.toggle("toggle");
    }

  return (
    <> 
    <nav className='vim'>
        <div className="logo">
            <img src={img} alt='' />
        </div>
        <div className="hamburger" onClick={handleClick}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
        </div>
        <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/resume">Resume</Link></li>
            <li><Link to="/experiance">Experience</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
    </nav>
    </>
  )
}


export default Navbar