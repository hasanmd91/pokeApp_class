import React, { Component } from "react";
import style from "./pokesingle.module.css";

export default class Pokesingle extends Component {
  state = {
    data: [],
    isLoading: false,
  };

  componentDidMount() {
    this.setState({ isLoading: true });

    fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.params.pokesingle}`) // why pokesingle??
      .then((res) => res.json())
      .then((data) => {
        this.setState({ data: data, isLoading: false });
      });
  }

  render() {
    if (this.state.isLoading) {
      return <p> Loading...</p>;
    }
    return (
      <div className={style.pokesinglecard}>
        <h2>{this.state.data.name}</h2>
        <img
          src={this.state.data.sprites?.other.dream_world.front_default}
          alt={this.state.data.name}
        />
      </div>
    );
  }
}
