import React from "react";
import { useNavigate } from "react-router-dom";
import CardMain from "../components/CardMain";

const FilterLikesPage = (props) => {
  
  const navigate = useNavigate();
  
  const clickBtnBack = () => {
    navigate(-1);
    props.setLikedCardsIds([]);
  }

  return (
    <>
      <h1>Your likes</h1>
      <button 
        className="btn btn-outline-primary btnBack" 
        onClick={clickBtnBack}>
          Go Back
      </button>

      <div className="row">
        {props.likedCardsIds.map((saeAnimal) => {
          return (
            <div className="col-sm-4 mb-4 card" key = {saeAnimal['id']}>
            
              <CardMain 
                cardTitle = {saeAnimal['file-name']}
                cardText = {saeAnimal['catch-phrase']}
                urlCardImg = {saeAnimal['image_uri']}
              />

            </div>
          );
        })}
      </div>
    </>
  );
};

export default FilterLikesPage;
