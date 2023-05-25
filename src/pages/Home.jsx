import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";

const Home = (props) => {
  const navigate = useNavigate();

  const cards = new Array(15).fill("").map((__, i) => i);

  return (
    <div>
      <h1>Home page</h1>

      <button
        type="button"
        className="btn btn-outline-danger btnAllHeart"
        onClick={() => navigate("/filter-likes-page")}
      >
        <i className="bi bi-balloon-heart"></i>
        All likes
        <p className="pCounter">{props.count}</p>
      </button>

      <div className="row">
        {cards.map(() => {
          return (
            <>
              <Card 
              cardTitle = "cardTitle"
              cardText = "cardText"
              urlCardImg = "#"
              />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
