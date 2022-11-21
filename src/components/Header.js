// import { useState } from 'react';
import logo from "../images/logo192.png"
export const Header = () => {
    const handleClick = (event) => {
        let el = document.querySelector("header .unorderdList")
        el.classList.toggle("showItems")
    }
    return (
        <header>
            <nav className="nav-items">
                <div className="holder">
                    <img src={logo} width={60} alt="logo" />
                    <h2>Elshibl</h2>
                </div>
                <ul className="unorderdList">
                    <a href="#"><li>Home</li></a>
                    <a href="#"><li>Pricing</li></a>
                    <a href="#"><li>About</li></a>
                    <a href="#"><li>Content</li></a>
                </ul>
                <div onClick={handleClick} className='menu'>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>
        </header>
    )
}
