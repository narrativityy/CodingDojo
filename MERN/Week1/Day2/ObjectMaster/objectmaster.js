const pokemon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
        { "id": 133, "name": "Eevee",      "types": ["normal"] },
        { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
        { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);

const divBy3 = pokemon.filter((elem) => {
    return elem.id % 3 === 0
})
console.log(divBy3)

const fireType = pokemon.filter((elem) => {
    return elem.types.includes('fire')
})
console.log(fireType)

const multTypes = pokemon.filter((elem) => {
    return elem.types.length >= 2
})
console.log(multTypes)

const names = pokemon.map((elem) => {
    return elem.name
})
console.log(names)

const idOver90 = pokemon.filter((elem) => {
    return elem.id > 99
})
console.log(idOver90)

const idOver90Names = idOver90.map((elem) => {
    return elem.name
})
console.log(idOver90Names)

const poison = pokemon.filter((elem) => {
    return elem.types.length === 1 && elem.types[0] === 'poison'
})
console.log(poison)

const poisonNames = poison.map((elem) => {
    return elem.name
})
console.log(poisonNames)

const secondFlying = pokemon.filter((elem) => {
    return elem.types[1] === 'flying'
})
console.log(secondFlying)

const firstTypeSecondFlying = secondFlying.map((elem) => {
    return elem.types[0]
})
console.log(firstTypeSecondFlying)

const normalType = pokemon.filter((elem) => {
    return elem.types.includes('normal')
}).length
console.log(normalType)