import React from "react";

const BtnPramiry = ({ disabled, children, onClick, className, style, value }) => {
    return (
        <button
            type="button"
            className={className}
            disabled={disabled}
            onClick={onClick}
            style={style}
            
            value={value}
        >
           { children }
      </button>
    );
};

export default BtnPramiry;