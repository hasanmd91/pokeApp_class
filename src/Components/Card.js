import React from "react";
import { Link } from "react-router-dom";
import style from "./card.module.css";

const Card = (props) => {
  return (
    <div className={style.card}>
      <img src={props.image} alt={props.name} />
      <h3> {props.name}</h3>
      <Link> See more </Link>
    </div>
  );
};

export default Card;
