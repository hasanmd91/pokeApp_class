import React from "react";
import { Link } from "react-router-dom";
import style from "./card.module.css";

const Card = (props) => {
  return (
    <Link>
      <div className={style.card}>
        <img src={props.image} alt={props.name} />
        <h3> {props.name[0].toUpperCase() + props.name.slice(1)}</h3>
      </div>
    </Link>
  );
};

export default Card;
