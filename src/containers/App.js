import React, { Component } from "react";
import classes from "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] constructor");
    this.state = {
      persons: [
        { id: 1, name: "Rahul", age: 23 },
        { id: 3, name: "Roman", age: 25 },
        { id: 2, name: "Rohan", age: 27 },
      ],
      showPersons: false,
    };
  }

  // ----------------------------LifeCycle hooks-------------------------------
  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps", props);
    return state;
  }

  componentDidMount() {
    console.log("[App.js] componentDidMount");
  }

  //for prop updates
  shouldComponentUpdate(nextProps, nextState) {
    console.log("[App.js] shouldComponentUpdate");
    return true;
  }

  //for prop updates
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[App.js] componentDidUpdate");
  }

  // ---------------------------Handler functions-------------------------------
  deletePerson = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersons = () => {
    this.setState({
      showPersons: !this.state.showPersons,
    });
  };

  //---------------------------------Render-------------------------------------
  render() {
    console.log("[App.js] render");

    const style = {
      backgroundColor: "green",
      color: "White",
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
        {this.state.showPersons ? (
          <Persons
            persons={this.state.persons}
            deletePerson={this.deletePerson}
          />
        ) : null}
      </div>
    );
  }
}

export default App;
