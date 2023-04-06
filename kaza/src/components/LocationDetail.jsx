import React from "react";
import "./LocationDetail.css";

export function LocationDetail() {
    return (
        <div className="display_flex_profil">
               <div className="display_flex_titre">
                <h1 className="page_location_titre_de_la_location"> Cozy loft on the Canal Saint Martin </h1>
                    <h2 className="page_location_titre_ville "> Paris, Île-de-France </h2>
                    
                    <div className="page_location_les_spans">
                        <span className="page_location_span">cozy</span>
                        <span className="page_location_span">canal</span>
                        <span className="page_location_span">Paris 10</span>
                    </div>
               </div>
                <div className="display_profil_proprietaire">
                    <div className="page_location_profil_proprietaire">
                        <h3 className="page_location_nom_proprietaire">Alexandre <br /> Dumas</h3>
                        <div className="page_location_profil_proprietaire_badge"></div>
                    </div>
                    <div className="page_location_profil_proprietaire_etoile">
                        <span className="etoile_rouge">★</span>
                        <span className="etoile_rouge">★</span>
                        <span className="etoile_rouge">★</span>
                        <span className="etoile_grise">★</span>
                        <span className="etoile_grise">★</span>
                    </div>
                </div>
            </div>
    );
}

