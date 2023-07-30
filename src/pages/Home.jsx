import React, { Fragment, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BsBalloonHeartFill } from "react-icons/bs";
import { PiArrowFatLinesUpBold } from "react-icons/pi";

import Card from "../components/Card";
import InputSearh from "../components/InputSearh";
import NotFound from "../components/NotFound";
import BtnPramiry from "../components/buttons/BtnPramiry";

const Home = ({ seaAnimals, setSeaAnimals, ...props }) => {
  
  const [visible, setVisible] = useState(false);
  const [isMoreSeaAnimals, setIsMoreSeaAnimals] = useState(false);
  const [count, setCount] = useState(0);
  const [valueInput, setValueInput] = useState("");
  const [indexSeaAnimals, setIndexSeaAnimals] = useState(12);
  const [visibleItems, setVisibleItems] = useState(seaAnimals.slice(0, 12)); 

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

  const filteredSeaAnimals = seaAnimals.filter((seaAnimal) => {
    return (
      seaAnimal["file-name"].toLowerCase().includes(valueInput.toLowerCase()) ||
      seaAnimal["catch-phrase"].toLowerCase().includes(valueInput.toLowerCase())
    );
  });
    
  useEffect(() => {
    indexSeaAnimals > Object.keys(filteredSeaAnimals).length
      ? setIsMoreSeaAnimals(true)
      : setIsMoreSeaAnimals(false);
  }, [indexSeaAnimals, filteredSeaAnimals]);
  
  const handleOnChangeInput = (e) => {
    setValueInput(e.target.value);
    if (filteredSeaAnimals.length <= 12) {
      setIsMoreSeaAnimals(true);
    };
  };

  const handleShowMore = () => {
    setIndexSeaAnimals(indexSeaAnimals + 12);
    const nextVisibleItems = seaAnimals.slice(visibleItems.length, visibleItems.length + 12); 
    setVisibleItems([...visibleItems, ...nextVisibleItems]);  
    if (seaAnimals.length <= visibleItems.length + nextVisibleItems.length) {
      setIsMoreSeaAnimals(true); 
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
  const isFilteredSeaAnimals = filteredSeaAnimals.length === 0;
  
console.log(seaAnimals);

const buttons = [
  { name: "All", value: "All"},
  { name: "Slow", value: "Slow"},
  { name: "Fast", value: "Fast"},
  { name: "Stationary", value: "Stationary"},
]

const [filteredSeaAnimalsSpeed, setFilteredSeaAnimalsSpeed] = useState(filteredSeaAnimals);

const handleClickSpeed = (name) => {
  console.log("huhuhu")
  let filteredSeaAnimalsSpeed = []; 
  
  if(name === "All") {
    filteredSeaAnimalsSpeed = filteredSeaAnimals;
  } else {
    filteredSeaAnimalsSpeed = filteredSeaAnimals.filter((seaAnimal) => {
      return seaAnimal["speed"] === name;
    });
    
  }
  setFilteredSeaAnimalsSpeed(filteredSeaAnimalsSpeed);
};

//console.log(filteredSeaAnimalsSpeed)
//console.log(filteredSeaAnimals[1][speed])
console.log(filteredSeaAnimalsSpeed)
//  console.log(seaAnimals[0].id);
//  console.log(seaAnimals[0].speed);
// console.log(seaAnimals[0]['file-name']);

  return (
    <>
    {
      filteredSeaAnimals.map((items)=>{
        <div>{items['speed']}</div>
      })
    }
{
      buttons.map(({ name, value }) => {
        return (
          <button
          key={name}
          value={value}
          className="btn btnBack" 
          onClick={()=>{handleClickSpeed(name)}}
        >
          <span className="btnLikes">{name}</span>
        </button>
        )
      })
    }
      


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
          setIsMoreSeaAnimals={setIsMoreSeaAnimals}
          placeholder="search"
        />
      </section>
      
      <section className="menu">
      
      
    
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
        isFilteredSeaAnimals ?
          <NotFound/>
        :
        filteredSeaAnimalsSpeed.slice(0, indexSeaAnimals).map((seaAnimal) => {
            return (
                <Card
                  key={seaAnimal["id"]}
                  id={seaAnimal["id"]}
                  seaAnimals={props.seaAnimals}
                  setSeaAnimals={setSeaAnimals}
                  filteredSeaAnimals={filteredSeaAnimals}
                  likedCardsIds={props.likedCardsIds}
                  onLike={handleLike}
                  seaAnimal={seaAnimal}
                  cardTitle={seaAnimal["file-name"]}
                  cardText={seaAnimal["catch-phrase"]}
                  urlCardImg={seaAnimal["image_uri"]}
                  speed={seaAnimal["speed"]}
                  incrementItem={incrementItem}
                  decreaseItem={decreaseItem}
                />
            );
          })}
      </section>

      { !isFilteredSeaAnimals &&
        <footer className="footer">
          
          <BtnPramiry
            className="btn btnShowMore" 
            onClick={handleShowMore}
            disabled={isMoreSeaAnimals === true}
          >
            <span className="btnLikes">
              {isMoreSeaAnimals ? "Not anymore" : "Show more"}
            </span>
          </BtnPramiry>
          
          {isMoreSeaAnimals && (
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
