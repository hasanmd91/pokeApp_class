import React from "react";
import { Link } from "react-router-dom";
import style from "./header.module.css";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className={style.header}>
      <Link to="/">
        {" "}
        <h1> PokeApp</h1>{" "}
      </Link>

      <Nav />
    </header>
  );
};

export default Header;
