/* eslint-disable jsx-a11y/anchor-is-valid */
import {React, useState, useEffect } from 'react'
import { useFiles } from '../../Components/Context/FilesContext';
import "./NavBar.css"
import logo from '../../Images/Logo Part 1.png'

const NavBar = () => {
  const { toggleInquiry } = useFiles();
  const handleToggle = () => {
    toggleInquiry(true);
  };
  const [scrolled, setScrolled] = useState(false);
  const [categories, setCategories] = useState(false);
  
    useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
        setCategories(false)
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
    const scrollStateCont = scrolled ? 'nav-cont-chi-sc-t' : 'nav-cont-chi-sc-f'
    const scrollStateLis = scrolled ? 'nav-links-t' : 'nav-links-f'
    const scrollStateBtn = scrolled ? 'nav-button-t' : 'nav-button-f'
    const scrollStateImg = scrolled ? 'Nav-Logo-t' : 'Nav-Logo-f'
    const scrollStateClickr = scrolled ? 'logo-clicker-t' : 'logo-clicker-f'

  return (
    <nav className='nav-cont'>
      <div className={scrollStateCont}>
        <div className='nav-logo-cont'>
          <img className={scrollStateImg} src={logo} alt=""/>
          <button className={scrollStateClickr} onClick={() => setCategories(!categories)}></button>
        </div>
        <ul className={scrollStateLis}>
            <li><a className='a-general-format' href="#">Home</a></li>
            <li><a className='a-general-format' href="#">About</a></li>
            <li><a className='a-general-format' href="#">Services</a></li>
            <li><a className='a-general-format' href="#">Contact</a></li>
        </ul>
        <button className={scrollStateBtn} onClick={handleToggle}>CONTACT US</button>
      </div>
    </nav>
  )
}

export default NavBar
