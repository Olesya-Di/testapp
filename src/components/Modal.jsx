import React from "react";
import { RxCross1 } from "react-icons/rx";
import ModalCard from "./ModalCard";

const Modal = (props) => {
  const { active, setActive, dataHuman } = props;

  const handleCloseModal = () => {
    setActive(false);
  };

  if (!active) {
    return null;
  }
  return (
    <>
      <article className="modal" onClick={handleCloseModal}>
        <section
          className="modal__content"
          onClick={(e) => e.stopPropagation()}
        >
          <section className="modal__cancelImg" onClick={handleCloseModal}>
            <RxCross1 size="20px" color="#df1f50" />
          </section>

          <section className="modal__content__body">
            <ModalCard
              name={`${dataHuman.name["first"]} ${dataHuman.name["last"]}`}
              email={dataHuman.email}
              src={dataHuman.picture["large"]}
              phone={dataHuman.cell}
              location={` ${dataHuman.location["country"]}, ${dataHuman.location["city"]}`}
            />
          </section>
        </section>
      </article>
    </>
  );
};

export default Modal;
