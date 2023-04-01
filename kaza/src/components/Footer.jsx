import React from "react";
import "./Footer.css";
import Logo_footer from "../assets/images/Logo_footer.png"

function Footer() {
    return (
        <div className="footer">
            <img src={Logo_footer} alt="Logo Kasa" />
                <p>© 2020 Kasa. Tous droits réservés.</p>
            </div>
    );
}

export default Footer;
