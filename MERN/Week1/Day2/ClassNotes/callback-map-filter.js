// functional programming

const myCoolCallback = () => {
    console.log("start")
}

setTimeout(myCoolCallback, 3000)

console.log("end")

const animals = ["leopard", "giraffe", "zebra", "elephant", "monkey", "lion"]
const newAnimals = animals.map((elem) => {
    return elem
})

console.log(newAnimals)

const filteredAnimals = animals.filter((elem) => {
    return elem.length < 7
})

console.log(filteredAnimals)

const people = Object.freeze([
    {name: "Bob", age: 30},
    {name: "Mary", age: 31},
    {name: "Sue", age: 28},
    {name: "George", age: 38}
])

const newPeople = people.map((person) => {
    return `${person.name} is cool`
})

console.log(newPeople)

const filteredPeople = people.filter((person) => {
    return person.age >= 30
})

// .filter() creates a shallow copy, which if changed will change the original
filteredPeople[0].name = "unicorn"

console.log(filteredPeople)
console.log(people)