import React from "react";
import Drink from "./Drink/Drink";

const Drinks = (props) => {
  const drinksDom = props.drinks.map((drink) => {
    return <Drink title={drink.title} image={drink.image} />;
  });
  return <div>{drinksDom}</div>;
};

export default Drinks;
