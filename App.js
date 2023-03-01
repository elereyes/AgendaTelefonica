import React, {useState} from 'react';

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456'},
    { name: 'Ada Lovelace', number: '39-44-5323523'},
    { name: 'Arto Hellas', number: '12-43-234345'},
    { name: 'Arto Hellas', number: '39-23-6423122'},
  ])
  const [newName, setNewName] = useState('')
  window.alert(newName + 'is already added to phonebook')
  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div> name: <input /></div>
        <div> number: <input /></div>
        <div><button type='submit'>add</button></div>
      </form>
      <h2>Numbers</h2>
    </div>
  )
}
export default App;
