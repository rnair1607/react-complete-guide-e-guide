import React from "react";
import classes from "./Person.css";

const person = ({ name, age, click }) => {
  return (
    <div className={classes.Person}>
      <p>Hello {name}.</p>
      {age}
      <button onClick={click}>Delete</button>
    </div>
  );
};

export default person;
