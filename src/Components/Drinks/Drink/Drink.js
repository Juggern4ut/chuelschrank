import React, { useState } from "react";
import classes from "./Drink.module.css";

const Drink = (props) => {
  const [amount, setAmount] = useState(0);

  const setAndValidateAmount = (newValue) => {
    if (newValue <= 0) {
      newValue = 0;
    }

    setAmount(newValue);
    buttonDisabled = amount > 0 ? null : classes.ButtonDisabled;
  };

  let buttonDisabled = amount > 0 ? null : classes.ButtonDisabled;

  return (
    <div className={classes.Drink}>
      <div className={classes.ImageContainer}>
        <img className={classes.Image} src={props.image} alt={props.title} />
      </div>
      <p>{props.title}</p>
      <div className={classes.Controls}>
        <div
          className={classes.Button}
          onClick={() => setAndValidateAmount(amount + 1)}
        >
          +
        </div>
        <div className={classes.Number}>{amount}</div>
        <div
          className={classes.Button + " " + buttonDisabled}
          onClick={() => setAndValidateAmount(amount - 1)}
        >
          -
        </div>
      </div>
    </div>
  );
};

export default Drink;
