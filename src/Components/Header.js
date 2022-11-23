import React from "react";
import style from "./header.module.css";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className={style.header}>
      <h1> PokeApp</h1>
      <Nav />
    </header>
  );
};

export default Header;
