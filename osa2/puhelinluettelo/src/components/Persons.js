import React from 'react'
import axios from 'axios'
const baseUrl = 'https://immense-tundra-45739.herokuapp.com/api/persons'

const Persons = (props) =>{
  
    const personsToShow = !props.newSearch
    ? props.persons
    : props.persons.filter(person => 
        person.name.toLowerCase().includes(props.newSearch.toLowerCase()))

    const destroy = (person) => {

     if (window.confirm(`Do you really want to remove ${person.name}`)) { 
        axios.delete(`${baseUrl}/${person.id}`)
          .then(response => {
            props.setPersons(props.persons.filter(p => p.id !== person.id ))
          })
          .catch( () => {
            props.setErrorMessage(
              `${person.name} was already removed from server`
            )
            setTimeout(() => {
              props.setErrorMessage(null)
            }, 5000)
          })
          props.setErrorMessage(
            `${person.name} was removed from the list`
          )
          setTimeout(() => {
            props.setErrorMessage(null)
          }, 3000)
          
      }
    }
    const rows = () => personsToShow.map( person => {
      return(
        <li key={person.id}>{person.name} {person.number} <button onClick={() => destroy(person)}>delete</button> </li> 
      )
    })
    return(
        <ul>
            {rows()}
        </ul>
    )
}
export default Persons