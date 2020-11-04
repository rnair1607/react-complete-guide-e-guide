import React, { Component } from "react";
import Person from "./Person/Person";

class Persons extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  // ----------------------------LifeCycle hooks-------------------------------
  static getDerivedStateFromProps(props, state) {
    console.log("[Persons.js] getDerivedStateFromProps", props);
    return state;
  }

  //for prop updates
  shouldComponentUpdate(nextProps, nextState) {
    console.log("[Persons.js] shouldComponentUpdate");
    return true;
  }

  //for prop updates
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[persons.js] getSnapshotBeforeUpdate");
    return { message: "Snapshot" };
  }

  //for prop updates
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[Persons.js] componentDidUpdate");
    console.log(snapshot);
  }

  componentWillUnmount() {
    console.log("[Persons.js] componentWillUnmount");
  }

  //---------------------------------Render-------------------------------------
  render() {
    const { persons, deletePerson } = this.props;
    console.log("[Persons.js] rendering");
    return persons.map((person, index) => {
      return (
        <Person
          name={person.name}
          click={() => deletePerson(index)}
          age={person.age}
          key={person.id}
        />
      );
    });
  }
}

export default Persons;
