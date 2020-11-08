import React, { Component } from "react";
import PropTypes from "prop-types";

import AuthContext from "../../../context/auth-context";
import classes from "./Person.css";
import Auxilliary from "../../../hoc/Auxilliary";
import withClass from "../../../hoc/WithClass";

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
    this.state = {};
  }

  static contextType = AuthContext;

  // ----------------------------LifeCycle hooks-------------------------------
  static getDerivedStateFromProps(props, state) {
    console.log("[Person.js] getDerivedStateFromProps", props);
    return state;
  }

  componentDidMount() {
    // this.inputElement.focus();
    this.inputElementRef.current.focus();
    console.log(`Context: ${this.context.authenticated}`);
  }

  //---------------------------------Render-------------------------------------
  render() {
    const { name, age, click, isAuth } = this.props;
    const { authenticated } = this.context;
    console.log("[Person.js] rendering");
    return (
      <Auxilliary>
        <p>
          Hello {name}.{authenticated ? "Authenticated" : "Please login"}
        </p>
        {age}
        <button onClick={click}>Delete</button>
        <input type="text" ref={this.inputElementRef} />
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
