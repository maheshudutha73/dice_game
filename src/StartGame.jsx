import React, { useState } from "react";
import dice_1 from "./Images/Dice-1.jpg";
import dice_2 from "./Images/Dice-2.jpg";
import dice_3 from "./Images/Dice-3.jpg";
import dice_4 from "./Images/Dice-4.jpg";
import dice_5 from "./Images/Dice-5.jpg";
import dice_6 from "./Images/Dice-6.jpg";
import dice_7 from "./Images/Dice-7.jpg";
const arr = [1, 2, 3, 4, 5, 6];

const StartGame = () => {
  const [randomNumber, SetRandomNumber] = useState();
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [isTotalScore, setTotalScore] = useState("GUESS THE NUMBER");

  // const totalScore = function () {
  //   if (randomNumber === selectedNumber) {
  //     setTotalScore("You Won The game");
  //   } else {
  //     setTotalScore("Play Again");
  //   }
  // };

  const generateRandomNumber = () => {
    let randomvalue = Math.floor(Math.random() * 6 + 1);
    SetRandomNumber(randomvalue);
    if (randomvalue === arr[selectedNumber]) {
      setTotalScore("YOU WON");
      setSelectedNumber(null);
    } else if (selectedNumber == null) {
      setTotalScore("PLEASE SELECT THE NUMBER");
      SetRandomNumber();
    } else {
      setTotalScore(" YOU LOST & GUESS AGAIN");
      setSelectedNumber(null);
    }
  };

  const image = function () {
    if (randomNumber === 1) {
      return dice_1;
    } else if (randomNumber === 2) {
      return dice_2;
    } else if (randomNumber === 3) {
      return dice_3;
    } else if (randomNumber === 4) {
      return dice_4;
    } else if (randomNumber === 5) {
      return dice_5;
    } else if (randomNumber === 6) {
      return dice_6;
    } else {
      return dice_7;
    }
  };
  //   const box = () => {
  //     setSelectedNumber(value)
  // if (value === selectedNumber) {
  //       document.getElementById("id1").style.background="white";
  //     }
  //   };
  // const twoFunctionCall = () => {
  //   generateRandomNumber();
  //   totalScore();
  // };

  const handleClick = (index) => {
    setSelectedNumber(index);
  };
  console.log(selectedNumber);

  return (
    <>
      <div className="maingamecontainer">
        <div className="gamediv">
          <p className="score">{isTotalScore}</p>
        </div>

        <div className="gamediv2">
          <div className="arrdata">
            {arr.map((value, index) => {
              return (
                <div key={index}>
                  <div
                    id="id1"
                    className={`box ${selectedNumber === index ? "box2" : ""}`}
                    onClick={() => handleClick(index)}
                  >
                    {value}
                  </div>
                </div>
              );
            })}
          </div>

          <p>Select Number</p>
        </div>
      </div>
      <div className="diceimgmain">
        <div>
          <img
            onClick={generateRandomNumber}
            className="diceimg"
            src={image()}
            alt=""
          />
        </div>
        <p>Click On Dice To Role</p>
        <div className="rules">
          <h4 className="gamerules">Game Rules</h4>
          <h5>1.First you have select a Number from 1 to 6.</h5>
          <h5>2.Click the Dice image to Role the dice.</h5>
          <h5>
            3.If the selected Number matches the rolled dice Number you win the
            Game.
          </h5>
          <h5>
            4.If the dice number doesn't you will lost the game & Guess Number
            Again and play.
          </h5>
        </div>
      </div>
    </>
  );
};

export default StartGame;
