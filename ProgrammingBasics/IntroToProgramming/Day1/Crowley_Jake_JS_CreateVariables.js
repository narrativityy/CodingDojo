// minHeight is 41 so when used in an if statement you can use > than instead of >=
var minHeight = 41;
// minAge is 10 for the same reason, when using an if statement you can use >
var minAge = 9;
// variable to store height value
var height = 52
// variable to store an age value
var age = 3

if (height > minHeight && age > minAge)
    console.log("Get on that ride, kiddo!")
else
    console.log("Sorry kiddo. Maybe next year.")

if (height > minHeight || age > minAge)
    console.log("Get on that ride, kiddo!")

else 
    console.log("Sorry kiddo. Maybe next year.")        