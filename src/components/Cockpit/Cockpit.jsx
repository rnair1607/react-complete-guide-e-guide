import React, { useEffect, useRef, useContext } from "react";

import AuthContext from "../../context/auth-context";

const cockpit = ({ showPersons, style, togglePersons, persons, login }) => {
  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);

  // ----------------------------useEffect React hook-------------------------------
  useEffect(() => {
    console.log("[Cockpit.js] 1st useEffect()");
    // can be used to send HTTP Requests
    // setTimeout(() => {
    // alert("Saved data to cloud!");
    // }, 1000);
    toggleBtnRef.current.click();

    return () => {
      console.log("[cockpit.js] clean up in 1st useEffect()");
    };
  }, []);

  useEffect(() => {
    console.log("[Cockpit.js] 2nd useEffect()");
    return () => {
      console.log("[cockpit.js] clean up in 2nd useEffect()");
    };
  }, []);

  console.log("[Cockpit.js] rendering");
  return (
    <React.Fragment>
      <h1>Hi, I'm React App</h1>
      {showPersons ? (
        <button ref={toggleBtnRef} style={style} onClick={togglePersons}>
          Hide
        </button>
      ) : (
        <button ref={toggleBtnRef} style={style} onClick={togglePersons}>
          Show
        </button>
      )}
      {authContext.authenticated ? (
        <button onClick={authContext.login} style={style}>
          Log out
        </button>
      ) : (
        <button onClick={authContext.login} style={style}>
          Log in
        </button>
      )}
    </React.Fragment>
  );
};

export default React.memo(cockpit);
