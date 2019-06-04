import React from 'react'

const Header = (props) => {
    return(
        <h1 key={props.id}>{props.name}</h1>
    )
}
const Content = (props) => {
    const dc = () => props.parts.map(y => {
    return(
        <Part key={y.id} name={y.name} exercises={y.exercises}/>
    )
  });
  return(
    <ul>
      {dc()}
    </ul>
  )
}
const Part = (props) => {
    return(
        <li>{props.name} {props.exercises}</li>
    )
}
const Total = (props) => {
  const total = props.parts.reduce((x , y) => {
    return(
      x + y.exercises
    )
  },0)
    return(
        <p>yhteensä {total} tehtävää</p>    
    )
}
const Course = (props) => {
    
  const dt = () => props.course.map((x) => {
    return (
        <div key={x.id}>
            <Header name={x.name}/>
            <Content parts={x.parts}/>
            <Total parts={x.parts}/> 
        </div>
    )
  })
    return(
    <div>
        {dt()}
    </div>
    )
}

export default Course