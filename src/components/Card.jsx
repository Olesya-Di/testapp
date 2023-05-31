import React, { useState } from "react";
import CardMain from "./CardMain";


const Card = (props) => {
    
    const [showComponent, setShowComponent] = useState(true);
    const [pressed, setPressed] = useState(false);

    const clickBtnDel = () => {
        if(pressed) {
            props.decreaseItem();
            props.onLike(props.saeAnimal);
        }
        setShowComponent(false);
    };

    const clickBtnHeart = () => {
        setPressed(!pressed);
        props.onLike(props.saeAnimal);
        
        if(!pressed) {
            props.incrementItem();
        } else {
            props.decreaseItem();
        };
    };
    

    return (
        <>
        {showComponent && (
            <div className="col-sm-4 mb-4 card"> 
                <button 
                    type="button" 
                    className="btn btn-outline-danger btnHeart"
                    onClick = {clickBtnHeart}
                >
                    <i className={(
                        pressed ?
                        "bi bi-balloon-heart-fill":
                        "bi bi-balloon-heart"
                    )}> 
                    </i>
                </button>

                <CardMain
                    cardTitle = {props.cardTitle}
                    cardText = {props.cardText}
                    urlCardImg = {props.urlCardImg}
                />

                <button
                    type="button"
                    className="btn btn-outline-primary btnDel"
                    onClick={clickBtnDel}
                >
                    <i className="bi bi-trash"></i>
                </button>
            </div>
        )}
        </>
    );
};

export default Card;
