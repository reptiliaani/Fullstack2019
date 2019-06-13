import React from 'react'
import axios from 'axios'
import personService from '../services/persons'
const baseUrl = 'http://localhost:3001/persons'

const Persons = (props) =>{
  
    const personsToShow = !props.newSearch
    ? props.persons
    : props.persons.filter(person => 
        person.name.toLowerCase().includes(props.newSearch.toLowerCase()))

    const destroy = (person) => {

     if (window.confirm(`Do you really want to remove ${person.name}`)) { 
        axios.delete(`${baseUrl}/${person.id}`).then(response => {
          console.log(response)
          props.setPersons(props.persons.filter(p =>
            p.id !== person.id 
          ))
        })
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