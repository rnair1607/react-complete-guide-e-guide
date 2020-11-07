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

  // ----------------------------LifeCycle hooks-------------------------------
  static getDerivedStateFromProps(props, state) {
    console.log("[Person.js] getDerivedStateFromProps", props);
    return state;
  }

  componentDidMount() {
    // this.inputElement.focus();
    this.inputElementRef.current.focus();
  }

  //---------------------------------Render-------------------------------------
  render() {
    const { name, age, click, isAuth } = this.props;
    console.log("[Person.js] rendering");
    return (
      <AuthContext.Consumer>
        {(context) => (
          <Auxilliary>
            <p>
              Hello {name}.
              {context.authenticated ? "Authenticated" : "Please login"}
            </p>
            {age}
            <button onClick={click}>Delete</button>
            <input type="text" ref={this.inputElementRef} />
          </Auxilliary>
        )}
      </AuthContext.Consumer>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  age: PropTypes.number,
  name: PropTypes.string,
};

export default withClass(Person, classes.Person);
