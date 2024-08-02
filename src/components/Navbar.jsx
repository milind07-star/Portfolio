import React, { useState } from "react";
import "./Navbar.css";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(prev => !prev); // Toggle the boolean state
  };

  console.log(openMenu);
  
  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
      <nav className="nav-wrapper">
        <div className="nav-content">
          <img
            className="logo"
            src="/assets/images/gold__1_-removebg-preview.png" // Adjust path for public directory
            alt="Logo"
          />
          <ul>
            <li><a className="menu-item">Home</a></li>
            <li><a className="menu-item">Skills</a></li>
            <li><a className="menu-item">Work Experience</a></li>
            <li><a className="menu-item">Contact Me</a></li>
            <button className="contact-btn" onClick={() => {}}>Hire me</button>
          </ul>
          <button className="menu-btn" onClick={toggleMenu}>
            <span className="material-symbols-outlined" style={{ fontSize: "1.8rem" }}>
              {openMenu ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
