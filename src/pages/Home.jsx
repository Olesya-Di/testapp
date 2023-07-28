import React, { Fragment, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BsBalloonHeartFill } from "react-icons/bs";
import { PiArrowFatLinesUpBold } from "react-icons/pi";

import Card from "../components/Card";
import InputSearh from "../components/InputSearh";
import NotFound from "../components/NotFound";
import BtnPramiry from "../components/buttons/BtnPramiry";
import { Button } from "bootstrap";

const Home = ({ saeAnimals, setSaeAnimals, ...props }) => {
  
  const [visible, setVisible] = useState(false);
  const [isMoreSaeAnimals, setIsMoreSaeAnimals] = useState(false);
  const [count, setCount] = useState(0);
  const [valueInput, setValueInput] = useState("");
  const [indexSaeAnimals, setIndexSaeAnimals] = useState(12);
  const [visibleItems, setVisibleItems] = useState(saeAnimals.slice(0, 12)); 

  const navigate = useNavigate();

  const clickBtnAllHeart = () => {
    navigate("/filter-likes-page");
  };

  const handleLike = (cardId) => {
    if (props.likedCardsIds.includes(cardId)) {
      props.setLikedCardsIds(
        props.likedCardsIds.filter((card) => card !== cardId)
      );
    } else {
      props.setLikedCardsIds([...props.likedCardsIds, cardId]);
    }
  };

  const incrementItem = () => {
    setCount(count + 1);
  };

  const decreaseItem = () => {
    setCount(count - 1);
  };

  const filteredSaeAnimals = saeAnimals.filter((saeAnimal) => {
    return (
      saeAnimal["file-name"].toLowerCase().includes(valueInput.toLowerCase()) ||
      saeAnimal["catch-phrase"].toLowerCase().includes(valueInput.toLowerCase())
    );
  });
    
  useEffect(() => {
    indexSaeAnimals > Object.keys(filteredSaeAnimals).length
      ? setIsMoreSaeAnimals(true)
      : setIsMoreSaeAnimals(false);
  }, [indexSaeAnimals, filteredSaeAnimals]);
  
  const handleOnChangeInput = (e) => {
    setValueInput(e.target.value);
    if (filteredSaeAnimals.length <= 12) {
      setIsMoreSaeAnimals(true);
    };
  };

  const handleShowMore = () => {
    setIndexSaeAnimals(indexSaeAnimals + 12);
    const nextVisibleItems = saeAnimals.slice(visibleItems.length, visibleItems.length + 12); 
    setVisibleItems([...visibleItems, ...nextVisibleItems]);  
    if (saeAnimals.length <= visibleItems.length + nextVisibleItems.length) {
      setIsMoreSaeAnimals(true); 
    }
  };  

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);
  const isFilteredSaeAnimals = filteredSaeAnimals.length === 0;
  
console.log(saeAnimals)

const buttons = [
  { name: "All", value: "All"},
  { name: "Slow", value: "Slow"},
  { name: "Fast", value: "Fast"},
  { name: "Stationary", value: "Stationary"},
]

const [filteredSaeAnimalsSpeed, setFilteredSaeAnimalsSpeed] = useState(filteredSaeAnimals);

const handleClickSpeed = (name) => {
  let filteredSaeAnimalsSpeed = []; 
  
  if(name === "All") {
    filteredSaeAnimalsSpeed = filteredSaeAnimals;
  } else {
    filteredSaeAnimalsSpeed = filteredSaeAnimals.filter(saeAnimal => saeAnimal["speed"] === name );
  }
  setFilteredSaeAnimalsSpeed(filteredSaeAnimalsSpeed);
  

};


  return (
    <>
      <h1 className="title">Marine life</h1>
      
      <section className="menu">           
        <BtnPramiry
          className="btn btnAllHeart"
          disabled={count === 0}
          onClick={clickBtnAllHeart}
        >
          <BsBalloonHeartFill
            color="#c36164"
            size="20px"
          />
          <p className="pCounter">
            <span className="btnLikes"> All likes:</span> {count}
          </p>
        </BtnPramiry>

        <InputSearh
          onChangeInput={handleOnChangeInput}
          setValueInput={setValueInput}
          valueInput={valueInput}
          setIsMoreSaeAnimals={setIsMoreSaeAnimals}
          placeholder="search"
        />
      </section>
      
      <section className="menu">
      
      
    {
      buttons.map(({ name, value }) => {
        <button
          key={name}
          value={value}
          className="btn btnBack" 
          onClick={()=>{handleClickSpeed(name)}}
        >
          <span className="btnLikes">{name}</span>
        </button>
      })
    }
      
        {/* <BtnPramiry
          className="btn btnBack" 
          onClick={HandleClickSpeed}
        >
          <span className="btnLikes">Slow</span>
        </BtnPramiry>

        <BtnPramiry
          className="btn btnBack" 
          //onClick={clickBtnBack}
        >
          <span className="btnLikes">Fast</span>
        </BtnPramiry>

        <BtnPramiry
          className="btn btnBack" 
          //onClick={clickBtnBack}
        >
          <span className="btnLikes">Stationary</span>
        </BtnPramiry> */}
        </section>

      <section className="cardsBlock">
        { 
        isFilteredSaeAnimals ?
          <NotFound/>
        :
          filteredSaeAnimals.slice(0, indexSaeAnimals).map((saeAnimal) => {
            return (
              <Fragment key={saeAnimal["id"]}>
                <Card
                  id={saeAnimal["id"]}
                  saeAnimals={props.saeAnimals}
                  setSaeAnimals={setSaeAnimals}
                  filteredSaeAnimals={filteredSaeAnimals}
                  likedCardsIds={props.likedCardsIds}
                  onLike={handleLike}
                  saeAnimal={saeAnimal}
                  cardTitle={saeAnimal["file-name"]}
                  cardText={saeAnimal["catch-phrase"]}
                  urlCardImg={saeAnimal["image_uri"]}
                  incrementItem={incrementItem}
                  decreaseItem={decreaseItem}
                />
              </Fragment>
            );
          })}
      </section>

      { !isFilteredSaeAnimals &&
        <footer className="footer">
          
          <BtnPramiry
            className="btn btnShowMore" 
            onClick={handleShowMore}
            disabled={isMoreSaeAnimals === true}
          >
            <span className="btnLikes">
              {isMoreSaeAnimals ? "Not anymore" : "Show more"}
            </span>
          </BtnPramiry>
          
          {isMoreSaeAnimals && (
            <BtnPramiry
              type="button"
              className="btn btnUp"
              onClick={scrollToTop}
              style={{ display: visible ? "inline" : "none" }}
            >
              <PiArrowFatLinesUpBold
                onMouseOver={({ target }) => (target.style.color = "white")}
                onMouseOut={({ target }) => (target.style.color = "#005f90")}
                color="#005f90"
                size="25px"
              />
            </BtnPramiry>
          )}
        </footer>
      }
    </>
  );
};

export default Home;
