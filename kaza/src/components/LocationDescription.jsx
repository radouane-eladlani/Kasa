import React, {useState} from 'react';
import './LocationDescription.css';


export function LocationDescription(props) {
    const [contentVisible, setContentVisible] = useState(false);
    const [arrowDirection, setArrowDirection] = useState("up");
  
    const toggleContentVisibility = () => {
      setContentVisible(!contentVisible);
      setArrowDirection(contentVisible ? "up" : "down");
    };
    const contentClassName = contentVisible ? "slide-down" : "slide-up";
    return (
      <div className="page_location_description">
        <div className="description_titre">
          <span>{props.title}</span>
          <i className={`fa-solid fa-chevron-${arrowDirection} fa-xl`} onClick={toggleContentVisibility}></i>
        </div>
        {contentVisible && <div className={`description_texte ${contentClassName}`}>{props.contenu}</div>}
      </div>
    );
  }