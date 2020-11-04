import React, { Component, useState } from "react";
import classes from "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

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
      marginBottom: "10px",
    };
    return (
      <div className={classes.App}>
        <Cockpit
          showPersons={this.state.showPersons}
          style={style}
          togglePersons={this.togglePersons}
        />
        <Persons
          persons={this.state.persons}
          deletePerson={this.deletePerson}
        />
      </div>
    );
  }

  // return React.createElement(
  //   "div",
  //   { className: "App" },
  //   React.createElement("h1", null, "Hi")
  // );
}

export default App;
