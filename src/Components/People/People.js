import React from "react";
import Person from "./Person/Person";

const People = (props) => {
  const peopleDom = props.people.map((person) => {
    return <Person name={person.name} image={person.image} />;
  });
  return <div>{peopleDom}</div>;
};

export default People;
