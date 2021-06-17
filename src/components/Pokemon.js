import React from "react";
import "../stylesheets/Pokemon.scss";
import PropTypes from "prop-types";

const Pokemon = (props) => {
  const types = props.pok.types.map((type, index) => {
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
      <h2 className="pokemon__title">{props.pok.name}</h2>
      <ul className="pokemon__Clist">{types}</ul>
    </article>
  );
};
Pokemon.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    url: PropTypes.string,
    pok: PropTypes.array,
  }),
};
export default Pokemon;
