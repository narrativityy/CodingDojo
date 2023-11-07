/*
Given a table name string and an object whose key value pairs represent column names and values for the columns
return a SQL insert statement string
Tip: string interpolation (using back ticks, the key to the left of num 1 key)
Bonus: after solving it, write a 2nd solution focusing on functional programming using built in methods
*/

const table = "users";

const insertData1 = { first_name: "John", last_name: "Doe" };

const expectedA = "INSERT INTO users (first_name, last_name) VALUES ('John', 'Doe');";

// Bonus:
const insertData2 = {
  first_name: "John",
  last_name: "Doe",
  age: 30,
  is_admin: false,
};

const expectedB =
  "INSERT INTO users (first_name, last_name, age, is_admin) VALUES ('John', 'Doe', 30, -1);";


// R.I.O.T.
// DRIVER 🚗
// PRESENTER 🧑‍🏫
// NAVIGATOR 🧭
function insert(tableName, columnValuePairs) {
    let answer = `INSERT INTO ${tableName} (`
    const keys = Object.keys(columnValuePairs)
    const values = Object.values(columnValuePairs)

    for (let i = 0; i < keys.length; i++) {
        if (i !== keys.length - 1) {
            answer += `${keys[i]}, `
        }
        else {
            answer += `${keys[i]}) VALUES (`
        }
    }

    for (let i = 0; i < values.length; i++) {
        if (i !== values.length -1) {
            if (typeof values[i] === 'string')
                answer += `'${values[i]}', `
            else {
                if (typeof values[i] === 'boolean') {
                    if (values[i] === false) 
                        answer += `-1, `
                    else 
                        answer += `1, `
                }
                else
                    answer += `${values[i]}, `
            }
        }
        else {
            if (typeof values[i] === 'string')
                answer += `'${values[i]}');`
            else {
                if (typeof values[i] === 'boolean') {
                    if (values[i] === false) 
                        answer += `-1);`
                    else 
                        answer += `1);`
                }
                else
                    answer += `${values[i]});`
            }
        }
    }

    return answer
}

console.log(insert(table, insertData1));
console.log(insert(table, insertData2));