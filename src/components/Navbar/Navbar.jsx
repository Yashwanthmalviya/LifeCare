import React, { useState } from 'react'
import images from '../../constants/images'
import './Navbar.css'
import { RxHamburgerMenu } from "react-icons/rx"
import { GoX } from "react-icons/go"
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)

    return (
        <div className="app__navbar section__padding">

            <div className="app__navbar-logo">
                <Link to="/"><img src={images.Logo} alt="Logo" /></Link>
            </div>


            <ul className="navbar__links">
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/contact">Book Appointment</Link></li>
                <li><Link to="/about">Our Values</Link></li>
            </ul>


            <div className="navbar__button">
                <div className="navbar__button-container">
                    <button type='button'>Contact Us</button>
                </div>

                <div className="navbar__smallscreen">
                    {!toggleMenu && (
                        <RxHamburgerMenu
                            color="#222"
                            fontSize={27}
                            onClick={() => setToggleMenu(true)}
                        />
                    )}
                    {toggleMenu && (
                        <div className="navbar__smallscreen-list">
                            <GoX
                                color="#222"
                                fontSize={27}
                                onClick={() => setToggleMenu(false)}
                            />
                            <ul className="navbar__smallscreen-links">
                                <li><Link to="/about" onClick={() => setToggleMenu(false)}>About Us</Link></li>
                                <li><Link to="/services" onClick={() => setToggleMenu(false)}>Services</Link></li>
                                <li><Link to="/contact" onClick={() => setToggleMenu(false)}>Book Appointment</Link></li>
                                <li><Link to="/about" onClick={() => setToggleMenu(false)}>Our Values</Link></li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Navbar
