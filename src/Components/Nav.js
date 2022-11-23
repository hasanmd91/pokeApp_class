import { NavLink } from "react-router-dom";
import style from "./nav.module.css";
import React from "react";

const Nav = () => {
  return (
    <div className={style.navbar}>
      <ul>
        <li>
          <NavLink to="/"> Home </NavLink>{" "}
        </li>
        <li>
          <NavLink to="/pokelist"> Pokelist </NavLink>{" "}
        </li>
        <li>
          <NavLink to="/about"> About </NavLink>{" "}
        </li>
      </ul>
    </div>
  );
};

export default Nav;
