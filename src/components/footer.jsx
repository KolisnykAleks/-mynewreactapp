import React from "react";
import './footer.css';
import copyright from '../images/copyright.png';

function Footer() {
    return (
        <>
            <div className="footer" background="#022B32" height="78">
                <div className="footer-container">
                <img src={copyright} alt="copyright" />
                </div>
            </div>
        </>
    )
}

export default Footer;