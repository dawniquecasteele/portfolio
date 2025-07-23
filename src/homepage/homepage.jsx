import React from 'react';
import { Link } from "react-router-dom";
import "./homepage.css"
import autobotLogo from "../assets/autobotLogo.png";

const Homepage = () => {

    return (
        <div className="homepageFormat">
            <section id="titleSec">
            
            
                <h1>dawniqueca steele</h1>
                <div className="noteSec">(daw-nee-qua)</div>
                <div className="detailSec">artist and developer, driven by empathy, creativity, and innovation.</div> 
        
                    {/*<div>Currently: Looking for fulltime and freelance opportunities!
                    </div> */}
                    
                    <div>My site is still under construction!
                    In the meantime, check out my socials or view my most recent project:</div>
                    <h4><a href="https://www.figma.com/proto/bLALJOqspBhWxFizv4sJcO/Forget-Me-Not-Pitch-Book?page-id=0%3A1&node-id=54-2&viewport=297%2C773%2C0.06&t=rsncGPmm7hedx3a6-1&scaling=contain&content-scaling=fixedring" 
                    target="_blank" rel="noopener noreferrer" 
            className="button">Thesis Game Pitch</a></h4>
                    
            
            

            </section>
            
            <section id="work"> 
                {/*<div className="projHeader">featured work</div>
                
                
                <Link to="work/smartevaluator" className={`${"smartevalSec"} ${"row"}`}>
                <section className={`${"smartevalSec"} ${"row"}`}></section>
                </Link>
        
                



                <Link to="/work/autobot" className={`${"autobotSec"} ${"row"}`}> 
                <section className={`${"autobotSec"} ${"row"}`}>  </section>
                 </Link>


                
                <Link to="/work/bloompedia" className={`${"bloomSec"} ${"row"}`}>
                    <section className={`${"bloomSec"} ${"row"}`}> </section> 
                </Link>
                
                </div> */}
            </section> 
              
        </div>
    )
}

export default Homepage;