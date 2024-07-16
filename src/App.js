import "./App.css";
import Dice from "./Dice.jsx";
import React from "react";
import { useState } from "react";
import StartGame from "./StartGame.jsx";

function App() {
  const [IsGameStarted, SetIsGameStarted] = useState();

  const togglestartgame = () => {
    SetIsGameStarted((prev) => !prev);
  };
  return (
    <>{IsGameStarted ? <StartGame /> : <Dice toggle={togglestartgame} />}</>
  );
}

export default App;
