import React from "react";
import { Link } from "react-router-dom";
import "./LocGrille.css";


function LocGrille() {
    return (
        <div className="location">
            <Link to={"/flat"}>
            <div className="titreGrille">Titre de la location 
            </div>
            </Link>
        </div>
    );
}
export default LocGrille;