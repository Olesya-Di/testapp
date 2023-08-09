import React from "react";

const CardMain = (props) => {
    
    const { name, phone, urlCardImg } = props;

    return (
        <>
            <img src={urlCardImg} className="cardImg" alt="#"></img>

            <section className="cardBody">
                <h4 className="cardTitle">{name}</h4>
                <p className="cardText">{phone}</p>
            </section>
        </>
    );
};

export default CardMain;