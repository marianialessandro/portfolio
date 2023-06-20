import React from "react";
import "./footer.css";

function Footer() {

    let getActualYear = () =>{
        return new Date().getFullYear();
    }

    return (
        <footer>
            <p>
                Copyright © {getActualYear()} <a href="https://www.marianialessandro.com">Alessandro Mariani</a> All rights reserved
            </p>
        </footer>
    );
}
  
export default Footer;
