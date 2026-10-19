import { useState } from 'react'

const StatedInput = ({ setter }) => <input onChange={(event) => setter(event.target.value)}/>

const Search = ({ searchSetter }) => (
  <div>
    Search filter: <StatedInput setter={searchSetter}/>
  </div>
)

const Form = (props) => {
  const { persons, newName, newNumber, setPersons, setNewName, setNewNumber } = props
  return (
      <form onSubmit={(event) => {
        event.preventDefault()
        if (newName !== '' && newNumber !== '') {
          if (persons.find(person => person.name === newName) !== undefined) {
            alert(`Name ${newName} is already added to phonebook`)
          } else if (persons.find(person => person.number === newNumber) !== undefined) {
            alert(`Number ${newNumber} is already added to phonebook`)
          } else {
            setPersons(persons.concat({name: newName, number: newNumber, id: persons.length + 1}))
          }
        }
      }}>
        <div>
          name: <input onChange={(event) => {
            setNewName(event.target.value)
          }} />
        </div>
        <div>
          number: <input onChange={(event) => {
            setNewNumber(event.target.value)
          }}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
  )
}

const Persons = ({ persons }) => {
  return (
    <ul>
      {persons.map((item) => <li key={item.id}>{item.name}</li>)}
    </ul>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchFilter, setSearchFilter] = useState('')

  const filteredPersons = persons.filter(x => x.name.includes(searchFilter))

  return (
    <div>
      <h2>Phonebook</h2>
      <Search searchSetter={setSearchFilter}/>

      <h2>Add a new</h2>
      <Form
        persons={persons}
        newName={newName}
        newNumber={newNumber}
        setPersons={setPersons}
        setNewName={setNewName}
        setNewNumber={setNewNumber}
      />
      <h2>Numbers</h2>
      <Persons persons={filteredPersons}/>
    </div>
  )
}

export default App
