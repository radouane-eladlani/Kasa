import React from "react";
import "./Grille.css";
import LocGrille from "./LocGrille.jsx";

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