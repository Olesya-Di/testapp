import React from "react";
import ButtonCross from "./ButtonCross";

const InputSearh = (props) => {
    
    const handleReset = () => {
        props.setValueInput("");
        document.querySelector('.inputBlock__inputSearch').focus();
    };

    return (
        <section className="">
            <section className="inputBlock">
                <input
                    id="inputSearch"
                    className="inputBlock__inputSearch"
                    placeholder={props.placeholder}
                    onChange={props.onChangeInput}
                    value={props.valueInput}
                /> 

                <section className="imgBlock" onClick={handleReset}>
                    <ButtonCross />
                </section>
            </section>
        </section>
    );
};

export default InputSearh;