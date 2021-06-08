import React, { useState } from "react";
import Data from "../data.json";
import PokeList from "./PokeList";

import "../stylesheets/App.css";

const App = () => {
  const [items] = useState(Data);
  <PokeList pokemonList={items} />;

  return <div className="App"></div>;
};

export default App;
