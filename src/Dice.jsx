import React from "react";
import dicelogo from "./Images/Dice_logo.jpg";

const Dice = ({ toggle }) => {
  return (
    <>
      <div className="main_container">
        <div>
          <img className="imagelogo" src={dicelogo} alt="" />
        </div>
        <div className="dicemainhead">
          <h1 className="dice_head"> DICE GAME</h1>
          <button onClick={toggle} className="palynow_btn">
            Play Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Dice;
