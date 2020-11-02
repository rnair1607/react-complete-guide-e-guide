import React, { Component, useState } from "react";
import "./App.css";
import Person from "./Person/Person";
import Radium from "radium";

class App extends Component {
  state = {
    persons: [
      { id: 1, name: "Rahul", age: 23 },
      { id: 3, name: "Roman", age: 25 },
      { id: 2, name: "Rohan", age: 27 },
    ],
    showPersons: false,
  };

  deletePerson = (personIndex) => {
    // const personArray = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersons = () => {
    this.setState({
      showPersons: !this.state.showPersons,
    });
    console.log(this.state.showPersons);
  };

  render() {
    let { persons } = this.state;
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
      ":hover": {
        backgroundColor: "lightgreen",
        color: "black",
      },
    };
    return (
      <div className="App">
        <h1>Hi, I'm React App</h1>
        {this.state.showPersons ? (
          <button style={style} onClick={this.togglePersons}>
            Hide
          </button>
        ) : (
          <button style={style} onClick={this.togglePersons}>
            Show
          </button>
        )}
        {persons.map((person, index) => {
          return (
            <Person
              name={person.name}
              click={() => this.deletePerson(index)}
              age={person.age}
              key={person.id}
            />
          );
        })}
      </div>
    );
  }

  // return React.createElement(
  //   "div",
  //   { className: "App" },
  //   React.createElement("h1", null, "Hi")
  // );
}

export default Radium(App);
