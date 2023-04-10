import React from "react";
import { Link } from "react-router-dom";
import "./LocationCart.css";

/*la function LocGrille permet de retourner le composant LocGrille avec le style*/
function LocationCart(props) {
const state = {
  locationId: props.id,
};

  return (
    <Link className="text_decoration" to="/location" state={state}>

      <div>
        <div className="location">
          <img src={props.imageUrl} alt="location_image" />
          <div className="titreGrille">{props.title} </div>
        </div>


      </div>
    </Link>
  );
}

export default LocationCart;