import React from "react";
import octopus from './../img/octopus.png'

const NotFound = () => {
    return (
        <section className="notFoundBlock">
            <p className="notFoundBlock__text">Nothing found, please, change your query</p>
            <section className="notFoundBlock__imgBlock">
            <img className="notFoundBlock__img" src={octopus} alt="octopus"/>
            </section>
        </section>
    );
};

export default NotFound;