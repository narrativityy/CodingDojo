const express = require('express')
const app = express()
const PORT = 8001
const { faker } = require('@faker-js/faker');

// MIDDLEWARE
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

function createRandomUser() {
    return {
        _id: faker.string.uuid(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        phoneNumber: faker.phone.number(),
    };
}

function createRandomCompany() {
    return {
        _id: faker.string.uuid(),
        name: faker.company.name(),
        address: {
            street: faker.location.streetAddress(),
            city: faker.location.city(),
            state: faker.location.state(),
            zipCode: faker.location.zipCode(),
            country: faker.location.country()
        }
    }
}

// ROUTES
app.get('/api/users/new', (req, res) => {
    res.json(createRandomUser())
})

app.get('/api/user/company', (req, res) => {
    const userCompany = {...createRandomUser(), ...createRandomCompany()}
    res.json(userCompany)
})

app.get('/api/companies/new', (req, res) => {
    res.json(createRandomCompany())
})


app.listen(PORT, () => console.log(` >>> Server is up and running on port ${PORT} and is listening for REQuests to 
RESpond to`))