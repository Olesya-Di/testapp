import React, { useState } from "react";
import CardMain from "./CardMain";
import { BsBalloonHeartFill, BsBalloonHeart } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";


const Card = ({ setSeaAnimals, filteredSeaAnimals, id, ...props }) => {
    
    const [pressed, setPressed] = useState(false);

    const handleDelete = (id) => {
        setSeaAnimals(filteredSeaAnimals.filter(obj => obj.id !== id));
        if(pressed) {
            props.decreaseItem();
            props.onLike(props.seaAnimal);
        }
    }

    const clickBtnHeart = () => {
        setPressed(!pressed);
        props.onLike(props.seaAnimal);
        
        if(!pressed) {
            props.incrementItem();
        } else {
            props.decreaseItem();
        };
    };

    return (
        <>
            <section className="card"> 
                <section className="btnBlock"> 
                    <button 
                        type="button" 
                        className="btnIcon btnHeart"
                        onClick = {clickBtnHeart}
                    >
                        {pressed ?
                            <BsBalloonHeartFill
                                onMouseOver={({target})=>target.style.color="white"}
                                onMouseOut={({target})=>target.style.color="#c36164"}
                                size="30px"
                            />:
                            <BsBalloonHeart 
                                onMouseOver={({target})=>target.style.color="white"}
                                onMouseOut={({target})=>target.style.color="#c36164"}
                                size="30px"
                            />
                        }
                    </button>

                    <button
                        type="button"
                        className="btnIcon btnDel"
                        onClick={ () => { 
                            handleDelete(id); 
                        } }
                    >
                        <RiDeleteBin6Line
                            onMouseOver={({target})=>target.style.color="white"}
                            onMouseOut={({target})=>target.style.color="#005f90"}
                            color="#005f90"
                            size="30px"
                        />
                    </button>
                </section>
                <CardMain
                    cardTitle = {props.cardTitle}
                    cardText = {props.cardText}
                    urlCardImg = {props.urlCardImg}
                />            
            </section>
        </>
    );
};

export default Card;
