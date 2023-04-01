import React from "react";
import logo from "../assets/images/logo.png"
import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar_logo">
            <NavLink to="/"end> 
                <img src={logo} alt="Logo Kasa" />
            </NavLink>
            </div>
            <NavLink to="/"end>
                <div> Accueil</div>
            </NavLink>
            <NavLink to="/about"end>
            <div>A Propos</div>
            </NavLink>
        </nav>
    );
}
export default Navbar;