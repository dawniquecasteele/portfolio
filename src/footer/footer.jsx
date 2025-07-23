import React from "react";
import "./footer.css";

const Footer = () => {

    return (
        <div className="footerBar">
            
            <section >
 
                <div className={`${"footertag"}`}>contact + socials</div>
                <div className="hLine"></div>
                <div className="footerLink">
                <a className={`${"footerLink"}  ${"navunderlineanim"}`} href="https://linkedin.com/in/dawniquecasteele" target="_blank" rel="noopener noreferrer">LinkedIn↗</a>
                <a className={`${"footerLink"}  ${"navunderlineanim"}`} href="https://github.com/dawniquecasteele" target="_blank" rel="noopener noreferrer">Github↗</a>
                <a className={`${"footerLink"} ${"navunderlineanim"}`} href="https://www.artstation.com/dawnstelay" target="_blank" rel="noopener noreferrer">ArtStation↗</a>
                </div>
                
                
        
            </section>

        </div>
        

    )
}

export default Footer;