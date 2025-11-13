/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, useRef } from "react";
import "./NavBar.css";
import logo from "../../Images/Logo Part 1.svg";

const NavBar = () => {
  const [hoverLogo, setHoverLogo] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);

  // غلق القائمة عند الضغط خارجها
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // مراقبة السّكروول لتغيير لون الخلفية
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
      {/* اليسار */}
      <div
        className="nav-left"
        onMouseEnter={() => setHoverLogo(true)}
        onMouseLeave={() => setHoverLogo(false)}
      >
        <div className="logo-wrapper">
          <span className={`brand-text ${hoverLogo ? "hide" : ""}`}>
            Blue Whale
          </span>
          <img
            src={logo}
            alt="Blue Whale Logo"
            className={`brand-logo ${hoverLogo ? "show" : ""}`}
          />
        </div>
      </div>

      {/* المنتصف */}
      <div className="nav-center" ref={menuRef}>
        <div
          className="menu-click-zone"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="menu-line"></div>
        </div>
        <div className={`dropdown-menu ${menuOpen ? "show" : ""}`}>
          <a href="#">Home</a>
          <a href="#">Projects</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
      </div>

      {/* اليمين */}
      <div className="nav-right">Contact</div>
    </nav>
  );
};

export default NavBar;
