import React, { useState } from "react";
import classes from "./Person.module.css";
const Person = (props) => {
  const [active, setActive] = useState(false);

  const checked = active ? classes.Checked : null;

  return (
    <div onClick={() => setActive(!active)} className={classes.Person}>
      <div className={classes.ImageContainer}>
        <div className={classes.Unchecked+" "+checked}></div>
        <img className={classes.Image} src={props.image} alt={props.name} />
      </div>
      <p>{props.name}</p>
    </div>
  );
};

export default Person;
