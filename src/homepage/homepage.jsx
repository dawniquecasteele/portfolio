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
                <div className="detailSec">technical designer, driven by empathy, creativity, and innovation.</div> 
        
                    <div>Currently: MAAD @Kennesaw State University '25</div>
                    
                    
            
            

            </section>
            
            <section id="work"> 
                <div className="projHeader">featured work</div>
                
                
                <Link to="work/smartevaluator" className={`${"smartevalSec"} ${"row"}`}>
                {/*<section className={`${"smartevalSec"} ${"row"}`}></section>*/}
                </Link>
        
                



                <Link to="/work/autobot" className={`${"autobotSec"} ${"row"}`}> 
                { /* <section className={`${"autobotSec"} ${"row"}`}>  </section>*/}
                 </Link>


                
                <Link to="/work/bloompedia" className={`${"bloomSec"} ${"row"}`}>
                   { /* <section className={`${"bloomSec"} ${"row"}`}> </section> */}
                </Link>
                
                
            </section>
        </div>
    )
}

export default Homepage;