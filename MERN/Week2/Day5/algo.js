/* 
  Recreate Object.entries() method
  Given an object,
  return an array of arrays of the object's key value pairs, where each key value pair is a 2 item array
  Bonus: Do not include key value pairs from the given objects prototype (these are included by default when looping over an object's keys)
*/

const obj1 = {
    name: "Pizza",
    calories: 9001,
  };
  const expected1 = [["name", "Pizza"], ["calories", 9001]];
  
  const obj2 = {
    firstName: "Foo",
    lastName: "Bar",
    age: 99,
  };
  const expected2 = [
    ["firstName", "Foo"],
    ["lastName", "Bar"],
    ["age", 99],
  ];
  
  // bonus - uncomment
obj1.__proto__ = obj2;
  
  // decide your ALGO roles:
  // 1. DRIVER 🚗
  // 2. PRESENTER 👩‍🏫👨‍🏫
  // 3. NAVIGATOR 🧭

function entries(obj) {
    let entries = new Array()
    let extra = obj.__proto__

    for (let someKey in obj) {
        entries.push([someKey, obj[someKey]])
    }

    for (let key in extra) {
        entries.pop()
    }
    return entries
}

console.log(entries(obj1));
console.log(entries(obj2));