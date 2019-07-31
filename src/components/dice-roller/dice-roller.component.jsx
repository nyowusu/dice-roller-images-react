import React, { useState, useEffect } from "react";
import Die from "../die/die.component";

function DiceRoller({ dieOne, dieTwo, rollDieOne, rollDieTwo }) {
  const [randOne, setRandOne] = useState(dieOne);
  const [randTwo, setRandTwo] = useState(dieTwo);

  useEffect(() => {
    // setState for dieOne
    setRandOne(dieOne);
    setRandTwo(dieTwo);
  }, [dieOne, dieTwo]);

  function getRandonInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleClick = () => {
    //dispatch an action to change to the current number rolled for each die
    rollDieOne(getRandonInt(1, 6));
    rollDieTwo(getRandonInt(1, 6));
  };

  return (
    <div className="container">
      <div className="dice-container">
        <Die rand={randOne} className="dice" />
        <Die rand={randTwo} className="dice" />
      </div>
      <div>{dieOne + dieTwo}</div>
      <button onClick={handleClick}>Roll</button>
    </div>
  );
}

export default DiceRoller;
