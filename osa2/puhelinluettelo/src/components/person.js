import react from 'React'
import React, { useState } from 'react'

const rows = () => personsToShow.map( person => {
    return(
      <li key={person.id}>{person.name} {person.number}</li>
    )
})
export default Person