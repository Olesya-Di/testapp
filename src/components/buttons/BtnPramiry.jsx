import React from "react";

const BtnPramiry = (props) => {
    
    const { disabled, children, onClick, className, style, value } = props;
    
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