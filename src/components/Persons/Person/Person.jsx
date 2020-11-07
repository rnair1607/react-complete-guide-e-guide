import React, { Component } from "react";
import PropTypes from "prop-types";

import classes from "./Person.css";
import Auxilliary from "../../../hoc/Auxilliary";
import withClass from "../../../hoc/WithClass";

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

  componentDidMount() {
    this.inputElement.focus();
  }

  //---------------------------------Render-------------------------------------
  render() {
    const { name, age, click } = this.props;
    console.log("[Person.js] rendering");
    return (
      <Auxilliary>
        <p>Hello {name}.</p>
        {age}
        <button onClick={click}>Delete</button>
        <input
          type="text"
          ref={(input) => {
            this.inputElement = input;
          }}
        />
      </Auxilliary>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  age: PropTypes.number,
  name: PropTypes.string,
};

export default withClass(Person, classes.Person);
