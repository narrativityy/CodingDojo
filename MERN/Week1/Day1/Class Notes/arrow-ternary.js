// arrow functions

// regular function
function hello(someName) {
    return "hello " + someName
}

console.log(hello('bob'))

// arrow function:
const helloArrow = (someName) => {
    console.log('hello')
    return "hello " + someName
}

console.log(helloArrow("dick"))

// short way
const helloShort = someName => `hello ${someName}`

console.log(helloShort('Patrick'))

// ternary

// regular if/else
const age = 20
if (age >= 21) {
    console.log("you may pass!")
}
else {
    console.log("you need more xp")
}

// ternary operation
age >= 21 ? console.log("you may pass!") : console.log("you need more xp")
