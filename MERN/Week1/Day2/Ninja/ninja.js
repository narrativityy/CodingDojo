class Ninja {
    constructor(name, health = 90, speed = 3, strength = 3) {
        this.name = name
        this.health = health
        this.speed = speed
        this.strength = strength
    }

    sayName() {
        console.log(this.name)
    }

    showStats() {
        console.log(`Name: ${this.name} | Strength: ${this.strength} | Speed: ${this.speed} | Health: ${this.health}`)
    }

    drinkSake() {
        this.health += 10
    }
}

const ninja = new Ninja('jake')
ninja.showStats()
ninja.drinkSake()
ninja.showStats()

class Sensei extends Ninja {
    constructor(name, wisdom = 10) {
        super(name)
        this.wisdom = wisdom
    }

    speakWisdom() {
        console.log("What one programmer can do in one month, two programmers can do in two months.")
    }
}

const sensei = new Sensei("Master")
sensei.showStats()
sensei.speakWisdom()