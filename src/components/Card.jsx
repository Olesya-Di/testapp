import React, { useState, useEffect } from "react";

const Card = (props) => {
    const [showComponent, setShowComponent] = useState(true);
    const [pressed, setPressed] = useState(false);
    //const [count, cntInc] = useState(0);
  // useEffect(() => {
  //   return () => {
  //     console.log('Компонент удален');
  //   };
  // }, []);
    //let count = 0;
    let count = 0;
    const clickBtnDel = () => {
        setShowComponent(false);
    };
    const clickBtnHeart = () => {
        setPressed(!pressed);
        
        if(!pressed) {
            count++;
        } else {
            count--;
        };
        console.log(count);
        
    };


    return (
        <>
        {showComponent && (
            <div className="col-sm-4 mb-4 card">
                <button 
                    type="button" 
                    className="btn btn-outline-danger btnHeart"
                    onClick={clickBtnHeart}
                >
                    <i className={(
                        pressed ?
                        "bi bi-balloon-heart-fill" :
                        "bi bi-balloon-heart"
                        )}>
                    </i>
                </button>

            <img src={props.urlCardImg} className="card-img-top" alt={"#"}></img>

            <div className="card-body">
                <h5 className="card-title">{props.cardTitle}</h5>
                <p className="card-text">{props.cardText}</p>
            </div>

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
