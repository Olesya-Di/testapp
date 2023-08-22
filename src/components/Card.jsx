import React, { useState } from "react";
import CardMain from "./CardMain";
import { BsBalloonHeartFill, BsBalloonHeart } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import BtnPramiry from "./buttons/BtnPramiry";

const Card = (props) => {

    const { styleTeam, human, setPeople, filteredPeople, onLike, id, name, phone, urlCardImg, incrementItem, decreaseItem, handleOpenModal } = props;

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
            <section className={`card ${styleTeam}`}> 
                <section className="btnBlock"> 
                    <BtnPramiry 
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
                    </BtnPramiry>

                    <BtnPramiry
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
                    </BtnPramiry>
                </section>
                <CardMain
                    name={name}
                    phone={phone}
                    urlCardImg={urlCardImg}
                    onClick={handleOpenModal}
                />            
            </section>
        </>
    );
};

export default Card;
