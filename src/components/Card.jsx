import React, { useState } from "react";
import CardMain from "./CardMain";
import { BsBalloonHeartFill, BsBalloonHeart } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";


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
            <div className="col-sm-3 mb-4 card"> 
                <button 
                    type="button" 
                    className="btn btnHeart"
                    onClick = {clickBtnHeart}
                >
                    {pressed ?
                        <BsBalloonHeartFill
                            color="#c36164"
                            size="50px"
                        />:
                        <BsBalloonHeart 
                            size="50px"
                        />
                    }
                </button>

                <button
                    type="button"
                    className="btn btnDel"
                    onClick={clickBtnDel}
                >
                    <RiDeleteBin6Line
                        color="#005f90"
                        size="50px"
                    />
                </button>
                
                <CardMain
                    cardTitle = {props.cardTitle}
                    cardText = {props.cardText}
                    urlCardImg = {props.urlCardImg}
                />

                
            </div>
        )}
        </>
    );
};

export default Card;
