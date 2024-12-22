import React from "react";
import self from "../assets/me.jpeg";
import "./about.css";

const About = () => {

    return (

        <div className= "aboutPage">

            <section className="row">
            
            <img src={self} className={`${"photoFix"} ${"twocolumn"}`} />

            <div className={`${"twocolumn"} ${"aboutText"}`}>
                
                <div>hi it's dawniqueca!</div>
                <div>Nice to meet you! I'm currently a grad student at Kennesaw State University, getting my Masters in Art and Design with a concentration in Digital Animation.
                    Growing up, my dream was always to create - 
                </div>
            </div>


            </section>

        </div>
    )
}
export default About;