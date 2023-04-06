import React from "react";
import "./Grille.css";
import LocGrille from "./LocGrille.jsx";

/*la function Grille permet de retourner le composant Grille avec le style*/
function Grille() {
    return (
        <div className="grille">
        <LocGrille/>
        <LocGrille/>
        <LocGrille/>
        <LocGrille/>
        <LocGrille/>
        <LocGrille/>
        </div>
    );
}
export default Grille;