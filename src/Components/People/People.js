import React from "react";
import Person from "./Person/Person";
import classes from "./People.module.css";

const People = (props) => {
  const peopleDom = props.people.map((person) => {

    const isChecked =
      props.checkedPeople.findIndex((val) => person.id === val) !== -1
        ? true
        : false;

    return (
      <Person
        isChecked={isChecked}
        key={person.id}
        check={props.check}
        id={person.id}
        name={person.name}
        image={person.image}
      />
    );
  });
  return <div className={classes.People}>{peopleDom}</div>;
};

export default People;
