import React, {useState} from 'react'



const Filter = (props) => {
const [ newSearch, setNewSearch] = useState('')

const handleSearchChange = (event) => {
    setNewSearch(event.target.value)
}


return(
    <div>
        <form>
            Etsi nimi: <input value={newSearch} onChange={handleSearchChange}/>
        </form>
    </div>
)
}
export default Filter