import React from "react";
import Drink from "./Drink/Drink";
import classes from "./Drinks.module.css";

const Drinks = (props) => {
  const drinksDom = props.drinks.map((drink) => {
    return <Drink key={drink.id} title={drink.title} image={drink.image} />;
  });
  return <div className={classes.Drinks}>{drinksDom}</div>;
};

export default Drinks;
