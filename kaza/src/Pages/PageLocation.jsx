import React, { useEffect, useState } from "react";
import "./PageLocation.css";
import { LocationDescription } from "../components/LocationDescription";
import { LocationBanner } from "../components/LocationBanner";
import { LocationDetailProfil } from "../components/LocationDetailProfil";
import { useLocation } from "react-router-dom";

function PageLocation() {
    const location = useLocation();
    const [locationData, setLocationData] = useState(null);

    useEffect(() => {
        const annulerRequete = new AbortController();
        fetch("logements.json", {
            signal: annulerRequete.signal
        })
            .then((response) => response.json())
            .then((apartement) => {
                const logement = apartement.find((apartement) => apartement.id === location.state.locationId);
                setLocationData(logement);
            })
            .catch((error) => console.log(error));
        return () => annulerRequete.abort();

    });

    if (locationData == null) {
        return <div className="loading">loading...</div>
    }
    return (
        <div className="page__location">
            <div>
                <LocationBanner pictures={locationData.pictures} />
            </div>
            <div>
                <LocationDetailProfil locationData={locationData} />
            </div>
            <div className="page_location_description_displayflex">
                <LocationDescription title="Description" contenu={locationData.description} />
                <LocationDescription title="Equipement" contenu={locationData.equipments.map((equipement) => (
                    <div className="padding-top" key={equipement}>{equipement}<br /></div>
                ))} />
            </div>

        </div>
    );

}

export default PageLocation