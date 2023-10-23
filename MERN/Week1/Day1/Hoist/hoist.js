// #1
// console.log(hello);                                   
// var hello = 'world';                                 

var hello
console.log(hello)
hello = 'world'

// undefined

// #2
// var needle = 'haystack';
// test();
// function test(){
//     var needle = 'magnet';
//     console.log(needle);
// }

var needle = 'haystack'
function test() {
    var needle = 'magnet';
    console.log(needle);
}
test()

// magnet

// #3
// var brendan = 'super cool';
// function print(){
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan);

var brendan = 'super cool'
function print() {
    brendan = 'only okay'
    console.log(brendan)
}
console.log(brendan)

// super cool

// #4
// var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
//     food = 'half-chicken';
//     console.log(food);
//     var food = 'gone';
// }

var food = 'chicken'
console.log(food)
function eat() {
    food = 'half-chicken'
    console.log(food)
    var food = 'gone'
}
eat()

// chicken, half-chicken

// #5
// mean();
// console.log(food);
// var mean = function() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);

var mean
mean()
console.log(food)
mean = function() {
    food = "chicken"
    console.log(food)
    var food = 'fish'
    console.log(food)
}
console.log(food)

// error mean is not a function

// #6
// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
//     genre = "rock";
//     console.log(genre);
//     var genre = "r&b";
//     console.log(genre);
// }
// console.log(genre);

var genre
console.log(genre)
genre = 'disco'
function rewind() {
    genre = 'rock'
    console.log(genre)
    var genre = 'r&b'
    console.log(genre)
}
rewind()
console.log(genre)

// undefined, rock, r&b, disco

// #7
// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
//     dojo = "seattle";
//     console.log(dojo);
//     var dojo = "burbank";
//     console.log(dojo);
// }
// console.log(dojo);

dojo = 'san jose'
console.log(dojo)
function learn() {
    var dojo
    dojo = 'seattle'
    console.log(dojo)
    dojo = 'burbank'
    console.log(dojo)
}
learn()
console.log(dojo)

// san jose, seattle, burbank, san jose

// #8
// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));
// function makeDojo(name, students){
//     const dojo = {};
//     dojo.name = name;
//     dojo.students = students;
//     if(dojo.students > 50){
//         dojo.hiring = true;
//     }
//     else if(dojo.students <= 0){
//         dojo = "closed for now";
//     }
//     return dojo;
// }

function makeDojo(name, students) {
    const dojo = {}
    dojo.name = name
    dojo.students = students
    if (dojo.students > 50) {
        dojo.hiriing = true
    }
    else if (dojo.students <= 0) {
        dojo = 'closed for now'
    }
    return dojo
}
console.log(makeDojo('Chicago', 65))
console.log(makeDojo('Berkeley', 0))

// {name: 'Chicago', students: 65, hiring: true }, error dojo is a constant variable
