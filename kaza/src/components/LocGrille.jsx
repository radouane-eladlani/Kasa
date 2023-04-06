import React from "react";
import { Link } from "react-router-dom";
import "./LocGrille.css";

/*la function LocGrille permet de retourner le composant LocGrille avec le style*/
function LocGrille() {
    return (
        <div className="location">
            <Link className="text_decoration" to={"/PageLocation"}>
            <div className="titreGrille">Titre de la location 
            </div>
            </Link>
        </div>
    );
}
export default LocGrille;