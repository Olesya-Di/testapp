import React from "react";
import { useNavigate } from "react-router-dom";
import CardMain from "../components/CardMain";
import BtnPramiry from "../components/buttons/BtnPramiry";

const FilterLikesPage = (props) => {
  
  const navigate = useNavigate();
  
  const clickBtnBack = () => {
    navigate(-1);
    props.setLikedCardsIds([]);
  }

  return (
    <>
      <h1 className="title">Your likes</h1>
      <section className="menu"> 
        <BtnPramiry
          className="btn btnBack" 
          onClick={clickBtnBack}
        >
          <span className="btnLikes">Go Back</span>
        </BtnPramiry>
      </section>
      
      <section className="row cardsBlock">
        {props.likedCardsIds.map((saeAnimal) => {
          return (
            <section className="col-sm-4 mb-4 card" key = {saeAnimal['id']}>
            
              <CardMain 
                cardTitle = {saeAnimal['file-name']}
                cardText = {saeAnimal['catch-phrase']}
                urlCardImg = {saeAnimal['image_uri']}
              />

            </section>
          );
        })}
      </section>
    </>
  );
};

export default FilterLikesPage;
