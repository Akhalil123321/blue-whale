/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";
import logo from "../../Images/Logo Part 1.svg";
import { useFiles } from "../Context/FilesContext";

const NavBar = () => {
  const { toggleInquiry } = useFiles();
  const navigate = useNavigate();
  const [hoverLogo, setHoverLogo] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= window.innerHeight) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      {/* LEFT */}
      <div
        className="nav-left"
        onMouseEnter={() => setHoverLogo(true)}
        onMouseLeave={() => setHoverLogo(false)}
        onClick={() => navigate("/")}
        style={{ cursor: "pointer" }}
      >
      <div className={`brand-text brand-stack ${hoverLogo ? "hide" : ""}`}>
        <span className="brand-ar">Blue Whale</span>
        <span className="brand-en">REAL ESTATE</span>
      </div>        <img
          src={logo}
          alt="Blue Whale Logo"
          className={`brand-logo ${hoverLogo ? "show" : ""}`}
        />
      </div>

      {/* CENTER */}
      <div className="nav-center" ref={menuRef}>
        <div className="menu-label">Menu</div>
        <div className="menu-click-zone" onClick={() => setMenuOpen(!menuOpen)}>
          <div className="menu-line"></div>
        </div>
        <div className={`dropdown-menu ${menuOpen ? "show" : ""}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/OurProjects" onClick={() => setMenuOpen(false)}>Projects</Link>
          <Link to="/Main" onClick={() => setMenuOpen(false)}>About</Link>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              toggleInquiry(true);
              setMenuOpen(false);
            }}
          >
            Contact
          </a>
        </div>
      </div>

      {/* RIGHT */}
      <div className="nav-right" onClick={() => toggleInquiry(true)}>
        Contact
      </div>
    </nav>
  );
};

export default NavBar;
