import React, { useEffect } from "react";
import "./PageLocation.css";
import {LocationDescription} from "../components/LocationDescription";
import { LocationBanner } from "../components/LocationBanner";
import { LocationDetail } from "../components/LocationDetail";
import { useLocation } from "react-router-dom";

function PageLocation() {
    const location = useLocation();
  console.log(location);
  console.log("id:",location.state.locationId)

useEffect(() => {
  fetchLocationData()
});

function fetchLocationData() {
    fetch("logements.json")
    .then((response) => response.json())
    .then((apartement) => {
          const locationSelection = apartement.find((apartement) => apartement.id === location.state.locationId);
          console.log(locationSelection);
    })
    .catch((error) => console.log(error));
}
    return (
        <div className="page__location">
            <div>
                <LocationBanner/>
            </div>
            <div>
                <LocationDetail/>
            </div>
            <div className="page_location_description_displayflex">
            <LocationDescription />
            <LocationDescription /> 
            </div>
           
        </div>
    );

}

export default PageLocation