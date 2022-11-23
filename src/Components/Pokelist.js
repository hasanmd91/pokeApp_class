import React from "react";
import Card from "./Card";
import style from "./pokelist.module.css";

const Pokelist = () => {
  return (
    <div className={style.container}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default Pokelist;
