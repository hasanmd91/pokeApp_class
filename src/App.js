import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { Component } from "react";
import Layout from "./Components/pages/Layout";
import Home from "./Components/Home";
import About from "./Components/About";
import Pokelist from "./Components/Pokelist";
import Notfound from "./Components/Notfound";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/pokelist" element={<Pokelist />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Notfound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}
