import React from "react";
import "./PageLocation.css";
import {LocationDescription} from "../components/LocationDescription";
import { LocationBanner } from "../components/LocationBanner";
import { LocationDetail } from "../components/LocationDetail";

function PageLocation() {
    return (
        <div className="page__location">
            <div>
                <LocationBanner/>
            </div>
            <div>
                <LocationDetail/>
            </div>
            <div className="page_location_description_displayflex">
            <LocationDescription/>
            <LocationDescription/> 
            </div>
           
        </div>
    );

}

export default PageLocation