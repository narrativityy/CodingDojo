function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {}
    pizza.crust = crustType
    pizza.sauce = sauceType
    pizza.cheeses = cheeses
    pizza.toppings = toppings
    return pizza
}
function randomPizza() {
    var pizza = {}
    if (Math.round(Math.random() * 2) >= 1) {
        pizza.crust = "deep dish"
        pizza.sauce = "traditional"
        pizza.cheeses = ["mozzerella"]
        pizza.toppings = ["pepperoni", "sausage"]
    }
    else {
        pizza.crust = "hand tossed"
        pizza.sauce = "marinara"
        pizza.cheeses = ["mozzerella", "feta"]
        pizza.toppings = ["mushrooms", "olives", "onions"]
    }
    return pizza
}

console.log(pizzaOven("deep dish", "traditional", ["mozzerella"], ["pepperoni", "sausage"]))
console.log(pizzaOven("hand tossed", "marinara", ["mozzerella", "feta"], ["mushrooms", "olives", "onions"]))
console.log(randomPizza())
