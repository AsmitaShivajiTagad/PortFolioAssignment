import React, { useState } from 'react';
import About from './About';
import Contact from './Home';
import Login from './Login';
import { Link } from "react-router-dom"; 
import nav from './NavBar.module.css';
import { FaBars, FaTimes } from 'react-icons/fa';


export default function NavBar() {
    const [isMobile, setIsMobile] = useState(true);
    
  
    return (
        <>
            <nav className={nav.TopNav}>

            <div className={nav.cont}>
            
                <div className={nav.right}>
                    <h1 >Front-End Developer</h1>
                </div>

                <div className= {nav.left}>

                    <ul>
                        <li>
                        <Link to="/Home">Home</Link>
                        </li> 
                        <li>
                        <Link to="/About">About Me</Link>
                        </li>
                        <li>
                        <Link to="/Login">Login</Link>
                        </li>

                    </ul>        
                </div>

                </div>


            </nav>
        </>
    )
}