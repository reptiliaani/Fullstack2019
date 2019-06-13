import React, { useState, useEffect } from 'react'
import Filter from './components/filter'
import NewNumber from './components/NewNumber'
import Persons from './components/Persons'
import personService from './services/persons'


const App = () => {
    const [ persons, setPersons] = useState([]) 
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber] = useState('')
    const [ newSearch, setNewSearch] = useState('')

    useEffect(() => {
      personService
        .getAll().then(data => {
          setPersons(data)
      })
    }, [])
    
    return (
        <div>
            <h2>Phonebook</h2>
              <Filter newSearch={newSearch} setNewSearch={setNewSearch}/>
            <h2>Add a new number</h2>
              <NewNumber persons={persons} setPersons={setPersons} 
              newName={newName} setNewNumber={setNewNumber}
              newNumber={newNumber} setNewName={setNewName}/>
            <h2>Numbers</h2>
              <Persons persons={persons} setPersons={setPersons} newSearch={newSearch}/>
              
    </div>
  )
}
export default App