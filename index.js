const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const Person = require('./models/people')

app.use(cors())
app.use(express.json())
app.use(express.static('build'))
app.use(morgan('tiny'))

// let persons = [
//   {
//     "name": "Arto Hellas",
//     "number": "040-123456",
//     "id": 1
//   },
//   {
//     "name": "Ada Lovelace",
//     "number": "39-44-5323523",
//     "id": 2
//   },
//   {
//     "name": "Dan Abramov",
//     "number": "12-43-234345",
//     "id": 3
//   },
//   {
//     "name": "Mary Poppendieck",
//     "number": "39-23-6423122",
//     "id": 4
//   }
// ]

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.get('/api/persons', (req, res, next) => {
  // res.json(persons)
  Person.find({}).then(person => {
    res.json(person)
  }).catch(error => next(error))
})

app.post('/api/persons', (req, res, next) => {
  // const body = req.body

  // if (!req.body) {
  //   res.sendStatus(400).send({ error: 'content is required' })
  // } else {
  //   const person = new Person({
  //     name: req.body.name,
  //     number: req.body.number
  //   })

  const person = new Person({
    name: req.body.name,
    number: req.body.number
  })

  person.save().then(savedPerson => res.json(savedPerson))
    .catch(error => next(error))
  // res.json(person)
})

app.get('/api/persons/:id', (req, res, next) => {
  // const id = Number(req.params.id)
  // const person = Person.find(person => person.id === id)

  // if (person) {
  //   res.json(person)

  // } else {
  //   res.sendStatus(404).end()
  // }

  Person.findById(req.params.id).then(person => {
    if (person) {
      res.json(person)
    } else {
      res.status(404).end()
    }
  }).catch(error => next(error))
})

app.delete('/api/persons/:id', (req, res, next) => {
  // const id = Number(req.params.id)
  // const person = People.find(person => person.id === id)

  // if (person) {
  //   persons = People.filter(person => person.id !== id)
  //   res.sendStatus(204).end()
  // } else {
  //   res.sendStatus(404).end()
  // }

  Person.findByIdAndRemove(req.params.id).then(() => {
    res.status(204).end()
  }).catch(error => next(error))
})

app.get('/info', (req, res, next) => {
  // res.send(`<div>Phonebook has info for ${Person.countDocuments({})} people</div>
  // <div></br>${new Date}</div>`)

  Person.countDocuments({}).then(result => {
    res.send(`<div>Phonebook has info for ${result} people</div>
  <div></br>${new Date}</div>`)
  }).catch(error => next(error))
})

const unknownEnpoint = (req, res) => {
  res.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEnpoint)

const errorHandler = (error, req, res, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return res.status(400).send({ error: 'malformatted id' })
  }

  next(error)
}

app.use(errorHandler)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})