import React, { useState, useEffect } from 'react'
import Filter from './components/filter'
import NewNumber from './components/NewNumber'
import Persons from './components/Persons'
import personService from './services/persons'
import './index.css'
const Notification=({message}) => {
  if(message === null){
    return null
  }
  return(
    <div className="error">
      {message}
    </div>
  )
}
const Added =({message})=>{
  if(message === null){
    return null
  }
  return(
    <div className="added">
      {message}
    </div>
  )
}
const App = () => {
    const [ persons, setPersons] = useState([]) 
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber] = useState('')
    const [ newSearch, setNewSearch] = useState('')
    const [ errorMessage, setErrorMessage] = useState(null)
    const [ addMessage, setAddedMessage] = useState(null)
    
    
    useEffect(() => {
      personService
        .getAll().then(data => {
          setPersons(data)
      })
    }, [])
    
    return (
        <div>
            <h1>Phonebook</h1>
              <Notification message= {errorMessage}/>
              <Added message= {addMessage}/>
              <Filter newSearch={newSearch} setNewSearch={setNewSearch}/>
            <h2>Add a new number</h2>
              <NewNumber persons={persons} setPersons={setPersons} 
              newName={newName} setNewNumber={setNewNumber}
              newNumber={newNumber} setNewName={setNewName}
              addMessage={addMessage} setAddedMessage={setAddedMessage}
              errorMessage={errorMessage} setErrorMessage={setErrorMessage}/>
            <h2>Numbers</h2>
              <Persons persons={persons} setPersons={setPersons} newSearch={newSearch} 
                errorMessage={errorMessage} setErrorMessage={setErrorMessage}/>
              
    </div>
  )
}
export default App