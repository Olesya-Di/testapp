import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BsBalloonHeartFill } from "react-icons/bs";
import { PiArrowFatLinesUpBold } from "react-icons/pi";

import Card from "../components/Card";
import InputSearh from "../components/InputSearh";
import NotFound from "../components/NotFound";
import BtnPramiry from "../components/buttons/BtnPramiry";

const Home = (props) => {
  
  const { people, setPeople, likedCardsIds, setLikedCardsIds } = props;

  const [visible, setVisible] = useState(false);
  const [isMorePeople, setIsMorePeople] = useState(false);
  const [count, setCount] = useState(0);
  const [valueInput, setValueInput] = useState("");
  const [indexPeople, setIndexPeople] = useState(8);
  const [visibleItems, setVisibleItems] = useState(people.slice(0, 8)); 

  const navigate = useNavigate();

  const clickBtnAllHeart = () => {
    navigate("/filter-likes-page");
  };

  const handleLike = (cardId) => {
    if (likedCardsIds.includes(cardId)) {
      setLikedCardsIds(
        likedCardsIds.filter((card) => card !== cardId)
      );
    } else {
      setLikedCardsIds([...likedCardsIds, cardId]);
    }
  };

  const incrementItem = () => {
    setCount(count + 1);
  };

  const decreaseItem = () => {
    setCount(count - 1);
  };

  const filteredPeople = people.filter((human) => {
    return (
      human.name["first"].toLowerCase().includes(valueInput.toLowerCase()) ||
      human.name["last"].toLowerCase().includes(valueInput.toLowerCase())
    );
  });
    
  useEffect(() => {
    indexPeople > Object.keys(filteredPeople).length
      ? setIsMorePeople(true)
      : setIsMorePeople(false);
  }, [indexPeople, filteredPeople]);
  
  const handleOnChangeInput = (e) => {
    setValueInput(e.target.value);
    if (filteredPeople.length <= 8) {
      setIsMorePeople(true);
    };
  };

  const handleShowMore = () => {
    setIndexPeople(indexPeople + 8);
    const nextVisibleItems = people.slice(visibleItems.length, visibleItems.length + 8); 
    setVisibleItems([...visibleItems, ...nextVisibleItems]);  
    if (people.length <= visibleItems.length + nextVisibleItems.length) {
      setIsMorePeople(true); 
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
  const isFilteredPeople = filteredPeople.length === 0;
  
// const buttons = [
//   { name: "All", value: "All"},
//   { name: "Women", value: "Slow"},
//   { name: "Men", value: "Fast"},
// ]

// const [filteredPeopleSpeed, setFilteredPeopleSpeed] = useState(filteredPeople);

// const handleClickSpeed = (name) => {
//   console.log("huhuhu")
//   let filteredPeopleSpeed = []; 
  
//   if(name === "All") {
//     filteredPeopleSpeed = filteredPeople;
//   } else {
//     filteredPeopleSpeed = filteredPeople.filter((human) => {
//       return human["speed"] === name;
//     });
    
//   }
//   setFilteredPeopleSpeed(filteredPeopleSpeed);
// };

//console.log(filteredPeopleSpeed)
//console.log(filteredPeople[1][speed])
//console.log(filteredPeopleSpeed)
//  console.log(People[0].id);
//  console.log(People[0].speed);
// console.log(People[0]['file-name']);

  return (
    <>
    {/* {
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
    } */}
      <h1 className="title">Nice to meet you</h1>
      
      <section className="menu">           
        <BtnPramiry
          className="btn btnAllHeart"
          disabled={count === 0}
          onClick={clickBtnAllHeart}
        >
          <BsBalloonHeartFill
            color="#df1f50"
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
          setIsMorePeople={setIsMorePeople}
          placeholder="search"
        />
      </section>
      
      <section className="cardsBlock">
        { 
        isFilteredPeople ?
          <NotFound text="Nothing found, please, change your query"/>
        :
        filteredPeople.slice(0, indexPeople).map((human) => {
            return (
                <Card
                  key={human.cell}
                  id={human["id"]}
                  setPeople={setPeople}
                  filteredPeople={filteredPeople}
                  likedCardsIds={likedCardsIds}
                  onLike={handleLike}
                  human={human}
                  name={human.name["first"]}
                  age={human.dob["age"]}
                  phone={human.cell}
                  email={human.email}
                  urlCardImg={human.picture["large"]}
                  incrementItem={incrementItem}
                  decreaseItem={decreaseItem}
                />
            );
          })}
      </section>

      { !isFilteredPeople &&
        <footer className="footer">
          
          <BtnPramiry
            className="btn btnShowMore" 
            onClick={handleShowMore}
            disabled={isMorePeople === true}
          >
            <span className="btnLikes">
              {isMorePeople ? "Not anymore" : "Show more"}
            </span>
          </BtnPramiry>
          
          {isMorePeople && (
            <BtnPramiry
              type="button"
              className="btnIcon btnUp"
              onClick={scrollToTop}
              style={{ display: visible ? "inline" : "none" }}
            >
              <PiArrowFatLinesUpBold
                onMouseOver={({ target }) => (target.style.color = "#df1f50")}
                onMouseOut={({ target }) => (target.style.color = "#ffb2b9")}
                color="#ffb2b9"
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
