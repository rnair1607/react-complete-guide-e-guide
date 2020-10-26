import React from "react";

const person = ({ name, children, age }) => {
  return (
    <div>
      <p>Hello {name}.</p>
      {age}
      <p>{children}</p>
    </div>
  );
};

export default person;
