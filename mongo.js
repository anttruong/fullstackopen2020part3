const mongoose = require('mongoose')

const password = process.argv[2]

if (process.argv.length < 3) {
    process.exit(1)
}

const name = process.argv[3]
const number = process.argv[4]

const url = `mongodb+srv://fullstack:${password}@cluster0-l76gj.mongodb.net/note-app?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

const personSchema = new mongoose.Schema({
    name: String,
    number: String,
})

const Person = mongoose.model('Person', personSchema)

if (process.argv.length === 5) {
    const person = new Person({
        name: `${name}`,
        number: `${number}`,
    })
    person.save().then(result => {
        console.log(`added ${name} number ${number} to phonebook`)
        mongoose.connection.close()
    })
} else {
    Person.find({}).then(result => {
        result.forEach(person => {
            console.log(person)
        })
        mongoose.connection.close()
    })
}

