import React, { useState } from "react";
import Data from "../data.json";
import Pokemon from "./Pokemon";
//import "../stylesheets/App.css";

const PokeList = (props) => {
  const pokItems = props.list.map((pokItem) => {
    console.log(pokItem);
    return (
      <li key={pokItem.id}>
        <Pokemon pok={pokItem} />
      </li>
    );
  });
  return <ul className="pokemonList">{pokItems}</ul>;
};

export default PokeList;
