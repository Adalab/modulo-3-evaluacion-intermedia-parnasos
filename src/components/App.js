import React, { useState } from "react";
import Data from "../data.json";
import PokeList from "./PokeList";

//import "../stylesheets/App.css";

const App = () => {
  const [items] = useState(Data);
  console.log(items);

  return (
    <div className="App">
      <h1 className="title">Mi lista de Pokemon</h1>
      <PokeList list={items} />;
    </div>
  );
};

export default App;
