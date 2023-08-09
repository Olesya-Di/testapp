import React from "react";
import heart from './../img/heart.png'

const NotFound = ({text}) => {
    return (
        <section className="notFoundBlock">
            <p className="notFoundBlock__text">{text}</p>
            <section className="notFoundBlock__imgBlock">
            <img className="notFoundBlock__img" src={heart} alt="heart"/>
            </section>
        </section>
    );
};

export default NotFound;