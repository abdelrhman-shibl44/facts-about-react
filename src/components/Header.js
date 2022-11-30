import React, { useState } from 'react';
import logo from "../images/logo192.png"
// font Awesom
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
// start Header component
export const Header = (props) => {
    const [className, setClass] = useState(false)
    const handleClick = (event) => {
        setClass(prev => !prev)
    }
    // elements that render in the page
    return (
        <header className={props.light ? "darkMode" : undefined} >
            <nav className="nav-items">
                <div className="holder">
                    <img src={logo} width={60} alt="logo" />
                    <h2>Elshibl</h2>
                </div>
                <ul className={`unorderdList ${className ? "showItems" : ""}`}>
                    <a href="#"><li>Home</li></a>
                    <a href="#"><li>Pricing</li></a>
                    <a href="#"><li>About</li></a>
                    <a href="#"><li>Content</li></a>
                </ul>
                <div onClick={handleClick} className="menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="switch">
                    <label htmlFor="switch">
                        <input type="button" onClick={props.toggle} style={props.light ? { left: "24px" } : { left: "1px" }} id="switch" />
                    </label>
                    <FontAwesomeIcon className='sun' icon={faSun} />
                    <FontAwesomeIcon className='moon' icon={faMoon} />
                </div>
            </nav>
        </header >
    )
}
// end Header component