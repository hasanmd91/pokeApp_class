import React from "react";
import { Component } from "react";
import { json } from "react-router-dom";
import Card from "./Card";
import style from "./pokelist.module.css";

export default class Pokelist extends Component {
  state = { data: [], isLoading: false };

  componentDidMount() {
    this.setState({ isLoading: true });

    fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ data: data.results, isLoading: false });
      });
  }

  render() {
    if (this.state.isLoading) {
      return <p> Loading....</p>;
    }

    console.log(this.state.data);
    return (
      <div className={style.container}>
        {this.state.data.map((card) => (
          <Card name={card.name} key={card.name} />
        ))}
      </div>
    );
  }
}
