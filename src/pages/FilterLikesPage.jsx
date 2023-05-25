import React from "react";
import { useNavigate } from "react-router-dom";

const FilterLikesPage = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <h1>Your likes</h1>
      <button 
        className="btn btn-outline-primary btnReset" 
        onClick={() => navigate(-1)}>
          Go Back
      </button>
    </>
  );
}

export default FilterLikesPage;
