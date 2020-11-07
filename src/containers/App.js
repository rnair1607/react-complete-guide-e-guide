import React, { Component } from "react";
import classes from "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import AuthContext from "../context/auth-context";

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
      showCockpit: true,
      isAuthenticated: false,
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

  toggleCockpit = () => {
    this.setState({
      showCockpit: !this.state.showCockpit,
    });
  };

  loginHandler = () => {
    this.setState((prevState) => {
      return {
        isAuthenticated: !prevState.isAuthenticated,
      };
    });
  };

  //---------------------------------Render-------------------------------------
  render() {
    const { showPersons, persons, showCockpit, isAuthenticated } = this.state;

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
        <h2>{isAuthenticated ? "True" : "False"}</h2>
        {showCockpit ? (
          <button onClick={this.toggleCockpit} style={style}>
            Remove cockpit
          </button>
        ) : (
          <button onClick={this.toggleCockpit} style={style}>
            Show cockpit
          </button>
        )}
        <AuthContext.Provider
          value={{ authenticated: isAuthenticated, login: this.loginHandler }}
        >
          {showCockpit ? (
            <Cockpit
              persons={persons}
              showPersons={showPersons}
              style={style}
              togglePersons={this.togglePersons}
            />
          ) : null}
          {showPersons && showCockpit ? (
            <Persons
              persons={persons}
              isAuth={isAuthenticated}
              deletePerson={this.deletePerson}
            />
          ) : null}
        </AuthContext.Provider>
      </div>
    );
  }
}

export default App;
