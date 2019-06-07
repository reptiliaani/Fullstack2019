import React, { useState } from 'react'
import Filter from './components/Filter'
import NewNumber from './components/NewNumber'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Martti Tienari', number: '040-123456', id: 2 },
    { name: 'Arto Järvinen', number: '040-123456', id: 3},
    { name: 'Lea Kutvonen', number: '040-123456', id: 4 }]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('') 
    // show persons that appear in search input 
    const personsToShow = !newSearch
    ? persons
    : persons.filter(person => 
        person.name.toLowerCase().includes(newSearch.toLowerCase()))

    const addName = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    }
    if(valid().length > 0){
        window.alert(`${newName} löytyy jos listasta`)
        return;
    }
    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
    }
    const handleNameChange = (event) => {
      setNewName(event.target.value)
     
    }
    const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
    }
    
    const rows = () => personsToShow.map( person => {
      return(
        <li key={person.id}>{person.name} {person.number}</li>
      )
    })

    const valid = () => persons.filter(person => 
    newName === person.name
    )

    return (
        <div>
            <h2>Puhelinluettelo</h2>
            <Filter/>
            <h2>lisää numero</h2>
              <form  onSubmit={addName} >
                <div>
                nimi: <input 
                value={newName} 
                onChange={handleNameChange}/>  
                </div>
                <div>
                  numero:  
                  <input 
                  value={newNumber}
                  onChange={handleNumberChange}/>
                </div>
                <button type="submit">lisää</button>
              </form>
      <h2>Numerot</h2>
      <ul>
          {rows()}
      </ul>
    </div>
  )
}
export default App