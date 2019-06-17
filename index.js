const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
app.use(express.static('build'))
app.use(cors())
app.use(bodyParser.json())
morgan.token('vittu', function (req, res) {
    return JSON.stringify({"name": req.body.name, "number": req.body.number})
})
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :vittu'))
let persons =
    [
      {
        "name": "Ada Lovelace",
        "number": "39-44-5323523",
        "id": 1
      },
      {
        "name": "Mary Poppendieck",
        "number": "39-23-6423122",
        "id": 2
      }
    ]

app.get('/api/persons', (req, res) => {
    res.json(persons)
})
app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)
    if (person) {
        response.json(person)
    }else {
        response.status(404).end()
    }
  })
app.get('/info', (req, res) => {
    res.send(`
        <div>
            Phonebook has ${persons.length} entries
        </div> 
        ${Date()}
    `)
})
app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)
  
    response.status(204).end()
})
app.post('/api/persons', (request, response) => {
    const body = request.body
  
    if(!body.name || !body.number){
        return response.status(400).json({ 
            error: 'Name or Number missing' 
        })
    }
    if(valid(body.name).length > 0){
        return response.status(400).json({ 
            error: 'Name is already in the list' 
        })
    }
    const person = {
      name: body.name,
      number:body.number,
      date: new Date(),
      id: generateId(),
    }
    persons = persons.concat(person)
    response.json(person)
  })
const valid = (name) => persons.filter(person => 
    name.toLowerCase() === person.name.toLowerCase()
)
const generateId = () => {
    const maxId = Math.floor(Math.random() * 9000000000)
    return maxId
}
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})