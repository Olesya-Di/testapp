import React from "react";
import { RxCross1 } from "react-icons/rx";

const InputSearh = ( {valueInput, setValueInput, onChangeInput, ...props} ) => {
    
    // const handleChange = (e) => {
    //     setValueInput(e.target.value);
    // }
    
    const handleReset = () => {
        setValueInput("");
        document.querySelector('.inputBlock__inputSearch').focus();
    };

    return (
        <section className="">
            <section className="inputBlock">
                <input
                    id="inputSearch"
                    className="inputBlock__inputSearch"
                    placeholder={props.placeholder}
                    onChange={onChangeInput}
                    value={valueInput}
                /> 

                <section className="imgBlock" onClick={handleReset}>
                    <RxCross1
                        size="20px"
                        color="#005f90"
                    />
                </section>
            </section>
        </section>
    );
};

export default InputSearh;