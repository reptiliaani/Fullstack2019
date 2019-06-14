import React from 'react'
import personService from '../services/persons'
import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const NewNumber = (props) =>{
    const valid = () => props.persons.filter(person => 
        props.newName === person.name
        )
    
    const addName = (event) => {
        event.preventDefault()
        const personObject = {
          name: props.newName,
          number: props.newNumber,
          id: props.persons.length + 1,
        }
        if(valid().length > 0){
            const yui = props.persons.find(toFind => toFind.name.toLowerCase() === personObject.name.toLowerCase()).id
            if(window.confirm(`${props.newName}/${yui} is already added to the list, want to change number?`)){
                console.log(yui)
                axios.put(`${baseUrl}/${yui}`, personObject).then(r => {
                    props.setPersons(props.persons.map(person => person.id !== yui ? person:r.data))
                    props.setAddedMessage(
                        `${props.newName} number changed.`
                      )
                      setTimeout(() => {
                        props.setAddedMessage(null)
                      }, 3000)
                    props.setNewName('')
                    props.setNewNumber('')
                })
                .catch( () => {
                    props.setErrorMessage(
                      `${props.newName} was already removed from server`
                    )
                    setTimeout(() => {
                      props.setErrorMessage(null)
                    }, 3000)
                  })
            }
        }else{
            personService
            .create(personObject).then(returnedPerson => {
                props.setPersons(props.persons.concat(returnedPerson))
                props.setAddedMessage(
                    `${props.newName} was added to the list`
                  )
                  setTimeout(() => {
                    props.setAddedMessage(null)
                  }, 3000)
                  props.setNewName('')
                  props.setNewNumber('')
            })    
        }
      
        }
    const handleNameChange = (event) => {
        props.setNewName(event.target.value)
           
    }
    const handleNumberChange = (event) => {
        props.setNewNumber(event.target.value)
    }
    return(
        <form  onSubmit={addName} >
            <div>
                nimi: <input 
                value={props.newName} 
                onChange={handleNameChange}
                />
            </div>
            <div>
                numero:  
                <input 
                value={props.newNumber}
                onChange={handleNumberChange}/>
            </div>
            <button type="submit">lisää</button>
        </form>
    )
}
export default NewNumber