import React, {Fragment, useState} from "react";
import { useNavigate } from "react-router-dom";
import { BsBalloonHeartFill } from "react-icons/bs";
import Card from "../components/Card";
import InputSearh from "../components/InputSearh";

const Home = (props) => {
  
  console.log(props.saeAnimals);
  const [count, setCount] = useState(0);
  const [valueInput, setValueInput] = useState("");
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
  
  const handleOnChangeInput = (e) => {
    setValueInput(e.target.value);
  }

  return (
    <>
      <h1 className="title">Marine life</h1>
      <section>
      <button
        type="button"
        className="btn btnAllHeart"
        onClick={clickBtnAllHeart}
      >
        <BsBalloonHeartFill 
          onMouseOver={({target})=>target.style.color="white"}
          onMouseOut={({target})=>target.style.color="#c36164"}
          color="#c36164"
          size="15px"
          className="iconHeartFull"
      
        />
        <p className="pCounter"><span className="btnLikes"> All likes:</span> {count}</p>
      </button>

      <InputSearh
        onChangeInput={handleOnChangeInput}
        setValueInput={setValueInput}
        valueInput={valueInput}
        placeholder="search"
      />

      </section>

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
