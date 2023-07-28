import React from "react";

const BtnSecondary = ({ disabled, children, onClick }) => {
    return (
        <button
            type="button"
            className="btn btnBack"
            disabled={disabled}
            onClick={onClick}
        >
           { children }
      </button>
    );
};

export default BtnSecondary;