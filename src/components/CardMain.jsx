import React from "react";


const CardMain = (props) => {

    return (
        <>
            <img src={props.urlCardImg} className="card-img-top" alt={"#"}></img>

            <div className="card-body">
                <h5 className="card-title">{props.cardTitle}</h5>
                <p className="card-text">{props.cardText}</p>
            </div>
        </>
    );
};

export default CardMain;