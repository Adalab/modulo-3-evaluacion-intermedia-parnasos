import React from "react";
import Pokemon from "./Pokemon";
import "../stylesheets/Pokelist.scss";
import PropTypes from "prop-types";

const PokeList = (props) => {
  const pokItems = props.list.map((pokItem) => {
    return (
      <li className="pokemon__item" key={pokItem.id}>
        <Pokemon pok={pokItem} />
      </li>
    );
  });
  return <ul className="pokemon__list">{pokItems}</ul>;
};
Pokemon.propTypes = {
  list: PropTypes.array,
};
export default PokeList;
