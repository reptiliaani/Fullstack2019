import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [countries, setCountries] = useState([]) 
  const [newSearch, setNewSearch] = useState('')
 

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all').then(response => {
        setCountries(response.data)
    })
  }, [])

  const handleSearchChange =(event) => {
    setNewSearch(event.target.value)
  }
  const matches = !newSearch
    ? countries
    : countries.filter(country => 
        country.name.toLowerCase().includes(newSearch.toLowerCase())) 
  
  const enough =() => {
    console.log(matches.length)
    if(matches.length < 2)
    {
      return(all())
    }
    if(matches.length > 10)
    {
      return(
        <div>
          LIIKAA!!!!!!!!!!!!!!!!!!!!!!!
        </div>
      )
    }
    else 
      return(rows())
  } 
  const rows = () => matches.map(country=>{
      return(
        <li key={country.population}>{country.name}</li>
      )
    })
  const all = () => matches.map(country => {
    return(
      <div>
        <h1>{country.name}</h1>
        <h2>Languages </h2>
        <ul>
          {languages(country)}
        </ul>
        <img width="346" height="200" src={country.flag}/>
     </div>
     
    )
  })
  const languages = (country) => country.languages.map(lang =>{
    return(
      <li key={lang.iso639_1}>{lang.name}</li>
    )
  }) 
  return (
    <div>
      <form>
        Find countries <input value={newSearch} onChange={handleSearchChange}/>
      </form>
      {enough()}
    </div>
  )
}

export default App