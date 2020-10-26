import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const App = (props) => {
  const [personsState, setPersons] = useState({
    persons: [
      { name: "Rahul", age: 23 },
      { name: "Rohan", age: 28 },
    ],
  });

  const switchHandler = () => {
    setPersons({
      persons: [
        { name: "Roman", age: 29 },
        { name: "Rohan", age: 28 },
      ],
    });
  };
  return (
    <div className="App">
      <h1>Hi, I'm React App</h1>
      <button onClick={switchHandler}>Button</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      />
    </div>
  );

  // return React.createElement(
  //   "div",
  //   { className: "App" },
  //   React.createElement("h1", null, "Hi")
  // );
};

export default App;
