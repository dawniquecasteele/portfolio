import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';
import linkedin from '../assets/linkedinLogo.svg'
import github from '../assets/githubLogo.png'

            
const Homepage = () => {
    return(
        <div>
           <div>
                <p> </p>
            </div> 
            <div className = "main">
                <header>under construction!</header>
                <p>there's nothing here at the moment. In the meantime, please visit the following profiles to view my work.</p>
                <div>
                    <a href='https://linkedin.com/in/dawniquecasteele' target='_blank' rel='noopener noreferrer'>
                        <img src={linkedin} alt="Linkedin Profile" />
                    </a>
                    <a href='https://github.com/dawniquecasteele' target='_blank' rel='noopener noreferrer'>
                        <img src={github} alt="Github Profile" />
                    </a>
                </div>
            </div>
        
        </div>
        
    )
};

export default Homepage;