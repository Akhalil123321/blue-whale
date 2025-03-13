/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import "./NavBar.css"
import logo from '../../Images/BLUE WHALE.png'

const NavBar = () => {
  return (
    <nav className='nav-cont'>
      <div className='nav-cont-chi'>
        <img className="Nav-Logo" src={logo} alt="" />
        <ul className="nav-links">
            <li><a className='a-general-format' href="#">Home</a></li>
            <li><a className='a-general-format' href="#">About</a></li>
            <li><a className='a-general-format' href="#">Services</a></li>
            <li><a className='a-general-format' href="#">Contact</a></li>
        </ul>
        <button className="nav-button">CONTACT US</button>
      </div>
    </nav>
  )
}

export default NavBar
