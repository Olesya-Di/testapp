import React, {Fragment, useState} from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";

const Home = (props) => {
  
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  
  const clickBtnAllHeart = () => {
    navigate("/filter-likes-page");
  }

  const handleLike = (cardId) => {
    if (props.likedCardsIds.includes(cardId)) {
      props.setLikedCardsIds(props.likedCardsIds.filter(card => card !== cardId));
    } else {
      props.setLikedCardsIds([...props.likedCardsIds, cardId]);
    }
  }

  const incrementItem = () => {
    setCount(count+1);
  };
  
  const decreaseItem = () => {
      setCount(count-1);
  };
  
  return (
    <>
      <h1 className="title">Marine life</h1>
      <button
        type="button"
        className="btn btnAllHeart"
        onClick={clickBtnAllHeart}
      >
        <i className="bi bi-balloon-heart-fill pCounter"></i>
        <p className="pCounter"><span className="btnLikes">All likes:</span> {count}</p>
      </button>

      <section className="row cardsBlock">
        {props.saeAnimals.map((saeAnimal) => {
          return (
            <Fragment key = {saeAnimal['id']}>
              <Card 
                      
                saeAnimals = {props.saeAnimals}
                likedCardsIds={props.likedCardsIds} 
                onLike = {handleLike}
                saeAnimal = {saeAnimal}
                cardTitle = {saeAnimal['file-name']}
                cardText = {saeAnimal['catch-phrase']}
                urlCardImg = {saeAnimal['image_uri']}
                incrementItem = {incrementItem}
                decreaseItem = {decreaseItem}
              />
            </Fragment>
          );
        })}
      </section>
    </>
  );
};

export default Home;
