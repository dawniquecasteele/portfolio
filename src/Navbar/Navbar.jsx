import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css"
import favicon from "../assets/favicon.png"


const Navbar = () => {

    return (
        <div className="navigationBar">
            <div>
            <Link to="/"><img src={favicon} className="logo"/></Link>
            </div>
            <section className="navGroup">
            <h4><Link to="/#work" className={`${"navLinks"} ${"navunderlineanim"}`}>work</Link></h4>
            <h4><Link to="/about" className={`${"navLinks"} ${"navunderlineanim"}`}>about</Link></h4>
            <h4><a href="https://drive.google.com/file/d/1gFkoyqgGhWDHSCHHrlVK3S7L7PENmh3H/view?usp=sharing" target="_blank" rel="noopener noreferrer" 
            className={`${"navLinks"} ${"navunderlineanim"}`}>resume</a></h4>
            </section>
        </div>
    
        
    
    )
}

export default Navbar;  