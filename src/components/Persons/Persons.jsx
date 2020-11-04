import React from "react";
import Person from "./Person/Person";

const persons = ({ persons, deletePerson }) =>
  persons.map((person, index) => {
    return (
      <Person
        name={person.name}
        click={() => deletePerson(index)}
        age={person.age}
        key={person.id}
      />
    );
  });

export default persons;
