import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={(event) => {
        event.preventDefault()
        if (newName !== '') {
          setPersons(persons.concat({name: newName}))
        }
      }}>
        <div>
          name: <input onChange={(event) => {
            setNewName(event.target.value)
        }} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((item) => <li key={item.name}>{item.name}</li>)}
      </ul>
    </div>
  )
}

export default App
