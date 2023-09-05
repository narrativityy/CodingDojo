// We need a loop to act as the runner who is continuously running
// The start of the loop is 1 because the first time the device would check how many miles the runner has ran would be after their first mile
// The loop should stop when the runner reaches the 6th lap because the device stops giving a candy after the 6th mile
// The loop will stop after the runner has ran over 6 miles
// The i++ statement is incrementing the i variable each iteration
// We need a candyGiven variable to keep track of how many candies the device has given and the i (iteration) variable in the for loop to keep track of the runners progress
var candyGiven = 0
for (var i = 1; i <= 6; i++) {
    if (i % 2 == 0)
        candyGiven++
}

// Dispays 3 because the runner is given a candy at mile 2, 4, and 6
console.log(candyGiven)