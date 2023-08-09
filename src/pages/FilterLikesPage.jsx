import React from "react";
import { useNavigate } from "react-router-dom";
import CardMain from "../components/CardMain";
import BtnPramiry from "../components/buttons/BtnPramiry";
import NotFound from "../components/NotFound";

const FilterLikesPage = (props) => {
  const { styleTeam, likedCardsIds, setLikedCardsIds } = props;
  const navigate = useNavigate();

  const clickBtnBack = () => {
    navigate(-1);
    setLikedCardsIds([]);
  };

  const isLikedCardsIds = likedCardsIds.length === 0;

  return (
    <>
      <h1 className="title">Your likes</h1>

      <section className="menu">
        <BtnPramiry
          className={`btn btnOrdinary ${styleTeam}`}
          onClick={clickBtnBack}
        >
          <span className="btnLikes">Go Back</span>
        </BtnPramiry>
      </section>

      <section className="cardsBlock">
        {isLikedCardsIds ? (
          <NotFound text="You didn't choose anyone" />
        ) : (
          likedCardsIds.map((human) => {
            return (
              <section 
                className={`card ${styleTeam}`} 
                key={human["id"]}
              >
                <CardMain
                  name={human.name["first"]}
                  phone={human.cell}
                  urlCardImg={human.picture["large"]}
                />
              </section>
            );
          })
        )}
      </section>
    </>
  );
};

export default FilterLikesPage;
