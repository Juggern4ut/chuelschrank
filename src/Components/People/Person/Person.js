import React from "react";
import classes from "./Person.module.css";

const Person = (props) => {
  const isChecked = props.isChecked ? classes.Checked : undefined;

  return (
    <div onClick={() => props.check(props.id)} className={classes.Person}>
      <div className={classes.ImageContainer}>
        <div className={classes.Unchecked + " " + isChecked}></div>
        <div
          className={classes.Image}
          style={{ backgroundImage: "url(" + props.image + ")" }}
        ></div>
      </div>
      <p>{props.name}</p>
    </div>
  );
};

export default Person;
