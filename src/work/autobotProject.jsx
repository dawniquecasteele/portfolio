import React from 'react';
import autobotHeader from "../assets/autobotheader.png"
import "./autobot.css"

const Autobot = () => {
    return (
        <div>
            <img src={autobotHeader} className="autoImage"/>
            <section className= "quickOverview">
                <div className = "row">
                <h3 className="fourcolumn">Timeline</h3>
                <h3 className="fourcolumn">Skills</h3>
                <h3 className="fourcolumn">Tools</h3>
                <h3 className="fourcolumn">Role</h3>
                </div>

                <div className = "row">
                    <h5 className="fourcolumn" >January - April 2023</h5>
                    <h5 className="fourcolumn">Product Research, UI Design</h5>
                    <h5 className="fourcolumn">Marvel, Adobe Illustrator</h5>
                    <h5 className="fourcolumn"> Researcher, Designer</h5>
                </div>
            
            </section>

            <section className="background">
                <div>BACKGROUND</div>

                <div>Autobot </div>
                <div>is a mobile app prototype designed to assist mechanics in performing routine car-maintenance tasks, thereby saving them time and energy to work on more complex tasks. </div>
            </section>
            
            <section className="research">

            </section>

            <section className ="designProcess">

            </section>

            <section className="keyFeatures">

            </section>

            <section className="reflection">

                
            </section>

            <h3></h3>
        </div>
    )
}

export default Autobot;