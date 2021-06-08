import React from "react";
//import "../stylesheets/App.css";

const Pokemon = (props) => {
  const types = props.pok.types.map((type, index) => {
    console.log(type);
    return (
      <li key={index} className="types">
        {type}
      </li>
    );
  });
  return (
    <article>
      <img
        className="pokemon__img"
        src={props.pok.url}
        alt={props.pok.name}
      ></img>
      <h1 className="pokemon__title">{props.pok.name}</h1>
      <ul className="pokemon__caract">{types}</ul>
    </article>
  );
};

export default Pokemon;
