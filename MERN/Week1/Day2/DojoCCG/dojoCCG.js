class Card {
    constructor(name, cost) {
        this.name = name
        this.cost = cost
    }
}

class Unit extends Card {
    constructor(name, cost, power, res) {
        super(name, cost)
        this.power = power
        this.res = res
    }

    attack(target) {
        target.res -= this.power
    }

    stats() {
        console.log(`Name: ${this.name} | Cost: ${this.cost} | Power: ${this.power} | Res: ${this.res}`)
    }
}

class Effect extends Card {
    constructor(name, cost, text, stat, magnitude) {
        super(name, cost)
        this.text = text
        this.stat = stat
        this.magnitude = magnitude
    }

    play(target) {
        if (target instanceof Unit) {
            if (this.stat == 'power')
                target.power += this.magnitude
            else
                target.res += this.magnitude
        }
        else
            throw new Error("Target must be a unit!")
    }
}

let redBeltNinja = new Unit("Red Belt Ninja", 5, 5, 10)
let blackBeltNinja = new Unit("Black Belt Ninja", 4, 3, 10)

let hardAlgorithm = new Effect("Hard Algorithm", 3, "This card increases res by 5", 'res', 5)
let unhandledPromiseRejection = new Effect("Unhandled Promise Rejection", 2, "This card increases power by 3", 'power', 3)
let pairProgramming = new Effect("Pair Programming", 5, "Increases power by 5", "power", 5)

hardAlgorithm.play(redBeltNinja)
redBeltNinja.stats()

unhandledPromiseRejection.play(blackBeltNinja)
blackBeltNinja.stats()

pairProgramming.play(redBeltNinja)
redBeltNinja.stats()

blackBeltNinja.attack(redBeltNinja)
redBeltNinja.stats()

redBeltNinja.stats()
blackBeltNinja.stats()