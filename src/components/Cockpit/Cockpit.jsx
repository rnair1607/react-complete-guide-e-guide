import React from "react";

const cockpit = ({ showPersons, style, togglePersons }) => {
  return (
    <React.Fragment>
      <h1>Hi, I'm React App</h1>
      {showPersons ? (
        <button style={style} onClick={togglePersons}>
          Hide
        </button>
      ) : (
        <button style={style} onClick={togglePersons}>
          Show
        </button>
      )}
    </React.Fragment>
  );
};

export default cockpit;
