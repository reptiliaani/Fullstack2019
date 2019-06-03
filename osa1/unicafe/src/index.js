import React, { useState } from 'react'
import ReactDOM from 'react-dom';

const Stats = (props) => {
  const Total = props.Total
  if (Total === 0)
    return(
      <div>
        <p>Ei yhtään palautetta annettu</p>
      </div>
    )
    return(
        <table>
          <thead>
            <tr>
              <th>Statistiikka</th>
            </tr>
            </thead>
          <tbody>
            <tr><Srow name = "Hyvä" stat = {props.Good}/></tr>
            <tr><Srow name = "Neutraali" stat = {props.Neutral}/></tr>
            <tr><Srow name = "Huono" stat = {props.Bad}/></tr>
            <tr><Srow name = "Yhteensä" stat = {props.Total}/></tr>    
            <tr><Srow name = "Keskiarvo" stat = {(props.Good-props.Bad)/props.Total} /></tr>
            <tr><Srow name = "Positiivisia" stat = {parseInt((props.Good/props.Total)*100)} filler = "%" /></tr>  
          </tbody>
        </table>
            
         
    )
}
const Srow = (props) => {
return(<>
  <td>{props.name}</td>
  <td>{props.stat}{props.filler}</td>
</>)
}
const App = (props) => {
    const [Good, setGood] = useState(0)
    const [Bad, setBad] = useState(0)
    const [Neutral, setNeutral] = useState(0)
    const [Total, setTotal] = useState(0)
    const handleNeutral = () =>{
        setNeutral(Neutral +1)
        setTotal(Total + 1)
    }
    const handleBad = () => {
      setBad(Bad + 1)
      setTotal(Total + 1)
    }
  
    const handleGood = () => {
      setGood(Good + 1)
      setTotal(Total + 1)
    }
    return (
      <div>
          <h1>Anna palautetta</h1>
        <div>
            <button onClick={handleGood}>Hyvä</button>
            <button onClick={handleNeutral}>neutraali</button>
            <button onClick={handleBad}>huono</button> 
        </div>
        <Stats Good={Good} Neutral={Neutral} Bad={Bad} N Total={Total}/>
      </div>
    )
  }
  

ReactDOM.render(<App />, document.getElementById('root'));