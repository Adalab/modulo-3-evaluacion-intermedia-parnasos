import React from "react";
import "../stylesheets/Pokemon.scss";

const Pokemon = (props) => {
  const types = props.pok.types.map((type, index) => {
    console.log(type);
    return (
      <li className="pokemon__caract" key={index}>
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
      <ul className="pokemon__Clist">{types}</ul>
    </article>
  );
};

export default Pokemon;
