import React from "react";

import style from "./about.module.css";

const About = () => {
  return (
    <div className={style.container}>
      <h2> This website is using information from pokeapi!</h2>
      <br />
      <p>
        {" "}
        The RESTful Pokémon API Serving over 250,000,000 API calls each month!
        This is a consumption-only API — only the HTTP GET method is available
        on resources. No authentication is required to access this API, and all
        resources are fully open and available. Since the move to static hosting
        in November 2018, rate limiting has been removed entirely, but we still
        encourage to limit the frequency of requests to limit our hosting costs.
      </p>
    </div>
  );
};

export default About;
