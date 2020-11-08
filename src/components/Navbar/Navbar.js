import React from 'react'
import './Navbar.css'
const Navbar = () => {
    return (
        <div className="container navbar">
            <header>
                <div className="lgo">
                    <h1>Danny Lin</h1>
                </div>                
                <nav>
                    <ul>
                        <li><a href="#experience">Experiences</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#work">My works</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Navbar;