import React from "react";

const CardMain = (props) => {

    return (
        <>
            <img src={props.urlCardImg} className="cardImg" alt={"#"}></img>

            <section className="cardBody">
                <h4 className="cardTitle">{props.cardTitle.replace(/_/g, " ")}</h4>
                <p className="cardText">{props.cardText}</p>
            </section>
        </>
    );
};

export default CardMain;