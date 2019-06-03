import React, { useState } from 'react'
import ReactDOM from 'react-dom'
const Maksimi = (props) => {
    return(
        <div>
            <h2>Most voted anecdote</h2>
            {anecdotes[points.indexOf(Math.max(...points))]}
        </div>
    )
}
const App = (props) => {

    const [selected, setSelected] = useState(0)
    const handleSelected = () =>{
        setSelected(Math.floor(Math.random() * 6))
    }
    const handleVote = () => {
        points[selected] += 1
    }
    
    return ( 
        <div> 
            {console.log(selected)}
            <h1>Anecdote of the day</h1>
            {props.anecdotes[Math.floor(Math.random() * 6)]}    
            <br></br>
            <button onClick={handleVote}>vote </button>
            <button onClick={handleSelected}>Next anecdote</button>
            <Maksimi/>
            {console.log(selected)}
        </div>
  )  
}
var points = [0,0,0,0,0,0]
const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]
ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)