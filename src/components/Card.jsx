import React, { useState } from "react";
import CardMain from "./CardMain";
import { BsBalloonHeartFill, BsBalloonHeart } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";


const Card = (props) => {

    const { human, setPeople, filteredPeople, onLike, id, name, age, phone, email, urlCardImg, incrementItem, decreaseItem } = props;

    const [pressed, setPressed] = useState(false);

    const handleDelete = (id) => {
        setPeople(filteredPeople.filter(obj => obj.id !== id));
        if(pressed) {
            decreaseItem();
            onLike(human);
        }
    }

    const clickBtnHeart = () => {
        setPressed(!pressed);
        onLike(human);
        
        if(!pressed) {
            incrementItem();
        } else {
            decreaseItem();
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
                                onMouseOver={({target})=>target.style.color="#ffb2b9"}
                                onMouseOut={({target})=>target.style.color="#df1f50"}
                                size="30px"
                            />:
                            <BsBalloonHeart 
                                onMouseOver={({target})=>target.style.color="#ffb2b9"}
                                onMouseOut={({target})=>target.style.color="#df1f50"}
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
                            onMouseOver={({target})=>target.style.color="#df1f50"}
                            onMouseOut={({target})=>target.style.color="#ffb2b9"}
                            color="#ffb2b9"
                            size="30px"
                        />
                    </button>
                </section>
                <CardMain
                    name={name}
                    phone={phone}
                    urlCardImg={urlCardImg}
                />            
            </section>
        </>
    );
};

export default Card;
