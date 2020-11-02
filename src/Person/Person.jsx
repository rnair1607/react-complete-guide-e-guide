import React from "react";
import "./Person.css";
import Radium from "radium";

const person = ({ name, age, click }) => {
  return (
    <div className="Person">
      <p>Hello {name}.</p>
      {age}
      <button onClick={click}>Delete</button>
    </div>
  );
};

export default Radium(person);
