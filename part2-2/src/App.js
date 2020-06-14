import React, { useState } from 'react'
import PersonForm from './components/PersonForm'
import Person from './components/Person'
import Filter from './components/Filter'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
	]) 
	const [ filteredPersons , setFilteredPersons ] = useState(persons)
	const [ newName, setNewName ] = useState('')
	const [ newNumber, setNewNumber ] = useState('') 

	const addNameAndNumber = (event) => {
		event.preventDefault()
		const nameExist = persons.find(person => (person.name === newName))
		
		if (Boolean(nameExist)) 
			alert(`${newName} is already added to phonebook`)			

		if(!Boolean(nameExist)) 
			setPersons(persons.concat({name: newName, number: newNumber}))

		console.log(persons)
	}


	
	const handleNameChange = (event) => {
		setNewName(event.target.value)
	}

	const handleNumberChange = (event) => {
		setNewNumber(event.target.value)
	}

	const handleNameSearch = (event) => {
		const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(event.target.value, 0))
		setFilteredPersons(filteredPersons)
	}

  return (
    <div>
      <h2>Phonebook</h2>
				<Filter handleNameSearch={handleNameSearch} />
			<h2>add a new</h2>
				<PersonForm 
					onEventsHadlers={{handleNameChange, addNameAndNumber, handleNumberChange}} 
					values={{newNumber, newName}} />
      <h2>Numbers</h2>
			{filteredPersons.map(person => <Person key={person.name} name={person.name} number={person.number} />)}
    </div>
  )
}

export default App