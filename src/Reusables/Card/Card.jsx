import React from 'react'
import './Card.css'

export const Card = ({
    imgsrc,
    text,
    subtext,
    backtext,
    backsubtext,
onclick}
) => {
    const checksrc = imgsrc !== "" ? imgsrc : "/Images/avatar.png";
    const checktext = text === "" ? "Heading" : text;

    return (

        <div className="card-container" onclick={onclick}>
            <div className="card-inner">
                <div className="card-front">
                    <img src={checksrc} alt="image" className="card-img" />
                    <h2>{checktext}</h2>
                    <p>{subtext}</p>
                </div>
                <div className="card-back">
                <h2>{backtext}</h2>
                    <p>{backsubtext}</p>
                </div>
            </div>
        </div>
    );
};