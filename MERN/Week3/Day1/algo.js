/*
    findObjectsFilter({searchFor}, [itemsArr])

    given a 'search for' {object} with primitive values and a list of objects
    return a new list of objects containing the same key value pairs as the search for
*/

// given searchFor and items
const items = [
    { firstName: "Bob", lastName: "Robert", age: 31 },
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "White", age: 31 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
];
// db.ninjas.find({firstName: "Bob", age: 31})
const searchFor1 = {
    firstName: "Bob",
    age: 31
};
// return a new list of objects containing the same key pair values
const output1 = [
    { firstName: "Bob", lastName: "Robert", age: 31 },
    { firstName: "Bob", lastName: "White", age: 31 },
    // { firstName: "Bob", lastName: "Smith", age: 27 },
];

const searchFor2 = {
    lastName: "Smith",
};
const output2 = [
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
];

// create a variable called answerArr and make it an empty array
// create a variable called searchObjLen and set it equal to the length of the keys array 
// create a for loop and iterate through the items array
//    create a count variable and set it to 0
//    create an inner for loop and iterate through the keys inside the object
//        check if the item in the outer loop doesnt have a key in the search object
//            continue
//        else increase count
//    check if count value is the same as the amount of keys in the searchObj
//      if true push item into answer array
//
// return answerArr

function findObjectsFilter(searchObj, items) {
    let answerArr = new Array()
    const searchObjLen = Object.keys(searchObj).length
    for (let item of items) {
        let count = 0
        for (let key in searchObj) {
            if (searchObj[key] === item[key])
                count++
        }

        if (count == searchObjLen)
            answerArr.push(item)
    }
    return answerArr
}


console.log(findObjectsFilter(searchFor1, items))
console.log(findObjectsFilter(searchFor2, items))