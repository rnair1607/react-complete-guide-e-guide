import React, { Component } from "react";
import classes from "./Person.css";

class Person extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  // ----------------------------LifeCycle hooks-------------------------------
  static getDerivedStateFromProps(props, state) {
    console.log("[Person.js] getDerivedStateFromProps", props);
    return state;
  }

  //---------------------------------Render-------------------------------------
  render() {
    const { name, age, click } = this.props;
    console.log("[Person.js] rendering");
    return (
      <div className={classes.Person}>
        <p>Hello {name}.</p>
        {age}
        <button onClick={click}>Delete</button>
      </div>
    );
  }
}

export default Person;
