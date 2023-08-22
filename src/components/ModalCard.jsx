import React from "react";

const ModalCard = (props) => {
  const { email, phone, name, src, location } = props;

  return (
    <>
      <img src={src} className="modalCardImg" alt="#" />

      <section className="modalCardBody">
        <h3 className="cardTitle">{name}</h3>
        <p className="modalCardBodyText"><span className="textWeight">email:</span> {email}</p>
        <p className="modalCardBodyText"><span className="textWeight">phone:</span> {phone}</p>
        <p className="modalCardBodyText"><span className="textWeight">location: </span>{location}</p>
      </section>
    </>
  );
};

export default ModalCard;
