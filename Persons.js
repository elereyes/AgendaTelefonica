import Person from "./Person"

const Persons = (persons, quary) => (
    <>
    {persons
      .filter(persons => person.name.toLowerCase().includes(quary))
      .map(({name, number}) => (
      <Person name={name} number={number} />
      ))}
    </>
)

export default Persons