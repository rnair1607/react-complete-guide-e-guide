import React, { useEffect } from "react";

const cockpit = ({ showPersons, style, togglePersons, persons }) => {
  // ----------------------------useEffect React hook-------------------------------
  useEffect(() => {
    console.log("[Cockpit.js] 1st useEffect()");
    // can be used to send HTTP Requests
    setTimeout(() => {
      // alert("Saved data to cloud!");
    }, 1000);
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
        <button style={style} onClick={togglePersons}>
          Hide
        </button>
      ) : (
        <button style={style} onClick={togglePersons}>
          Show
        </button>
      )}
    </React.Fragment>
  );
};

export default React.memo(cockpit);
