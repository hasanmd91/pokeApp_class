import React from "react";
import { Outlet } from "react-router-dom";
import style from "./main.module.css";

const Main = () => {
  return (
    <main className={style.main}>
      <Outlet />
    </main>
  );
};

export default Main;
