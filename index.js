const express = require('express')
const app = express()
const morgan = require('morgan')
// const cors = require('cors')

// app.use(cors())
app.use(express.json())
app.use(express.static('build'))
app.use(morgan('tiny'))

let persons = [
  {
    "name": "Arto Hellas",
    "number": "040-123456",
    "id": 1
  },
  {
    "name": "Ada Lovelace",
    "number": "39-44-5323523",
    "id": 2
  },
  {
    "name": "Dan Abramov",
    "number": "12-43-234345",
    "id": 3
  },
  {
    "name": "Mary Poppendieck",
    "number": "39-23-6423122",
    "id": 4
  }
]

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.get('/api/persons', (req, res) => {
  res.json(persons)
  // phonebook.find({}).then(persons => {
  //     res.json(persons)
  // })
})

app.post('/api/persons', (req, res) => {
  const name = req.body.name
  const number = req.body.number

  if (!name) {
    res.sendStatus(400).send({ error: 'name is required' })
  } else if (!number) {
    res.sendStatus(400).send({ error: 'number is required' })
  } else if (persons.find(person => person.name === name)) {
    res.sendStatus(400).send({ error: 'name must be unique' })
  } else {
    const person = {
      name: name,
      number: number,
      id: Math.floor(Math.random() * 999999999 + 1)
    }

    persons = persons.concat(person)
    res.json(person)
  }
})

app.get('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  const person = persons.find(person => person.id === id)

  if (person) {
    res.json(person)

  } else {
    res.sendStatus(404).end()
  }
})

app.delete('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  const person = persons.find(person => person.id === id)

  if (person) {
    persons = persons.filter(person => person.id !== id)
    res.sendStatus(204).end()
  } else {
    res.sendStatus(404).end()
  }
})

app.get('/info', (req, res) => {
  res.send(`<div>Phonebook has info for ${persons.length} people</div>
  <div></br>${new Date}</div>`)
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})