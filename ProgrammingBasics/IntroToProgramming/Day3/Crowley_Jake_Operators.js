function howMuchLeftOverCake(numberOfPieces, numberOfPeople) {
    var leftOverPieces = numberOfPieces % numberOfPeople
    if (leftOverPieces == 0)
        console.log("No leftovers for you!")
    else if (leftOverPieces < 3 && leftOverPieces > 0)
        console.log("You have some leftovers")
    else if (leftOverPieces >= 3 && leftOverPieces <= 5)
        console.log("You have leftovers to share")
    else
        console.log("Hold another party!")
}

howMuchLeftOverCake(10, 2)
howMuchLeftOverCake(10, 3)
howMuchLeftOverCake(4, 5)
howMuchLeftOverCake(6, 9)