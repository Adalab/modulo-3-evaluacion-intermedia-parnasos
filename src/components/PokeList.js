import React from "react";
import Pokemon from "./Pokemon";
import "../stylesheets/Pokelist.scss";

const PokeList = (props) => {
  const pokItems = props.list.map((pokItem) => {
    console.log(pokItem);
    return (
      <li className="pokemon__item" key={pokItem.id}>
        <Pokemon pok={pokItem} />
      </li>
    );
  });
  return <ul className="pokemon__list">{pokItems}</ul>;
};

export default PokeList;
