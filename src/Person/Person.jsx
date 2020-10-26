import React from "react";

const person = ({ name, children }) => {
  return (
    <div>
      <p>Hello {name}.</p>
      <p>{children}</p>
    </div>
  );
};

export default person;
