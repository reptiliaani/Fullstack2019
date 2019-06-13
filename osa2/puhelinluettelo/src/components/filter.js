import React from 'react'
const Filter = (props) => {
    
    const handleSearchChange = (event) => {
        console.log(event.target.value)
        props.setNewSearch(event.target.value)
    }
    
    return(
        <div>
          Etsi henkilö: <input value={props.newSearch} onChange={handleSearchChange}/>
        </div>
    )
}

export default Filter