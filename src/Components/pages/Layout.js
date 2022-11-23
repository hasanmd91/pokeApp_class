import React from "react";
import Footer from "../Footer";
import Main from "../Main";
import Header from "../Header";
import Style from "./layout.module.css";

const Layout = () => {
  return (
    <div className={Style.layout}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Layout;
