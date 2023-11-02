/* https://leetcode.com/problems/two-sum/

    Given an array of integers, return indices of the
    two numbers such that they add up to a specific target.

    You may assume that each input would have EXACTLY ONE SOLUTION,
    and you may not use the same element twice.

    the array is unsorted, contains no floats, and there may be duplicate values

    Given arr = [2, 11, 7, 15], target = 9,
    Because arr[0] + arr[2] = 2 + 7 = 9
    return [0, 2].

    example 1
    given: [2, 11, 7, 15]
    target: 9
    output: [0,2]

    example 2
    given: [3,2,4]
    target: 6
    output: [1,2]

    example 3
    given: [3,3]
    target: 6
    output: [0,1]
*/


// R.I.O.T.   Read Input Output Talk

// 1. Driver 🚗
// 2. Presenter 👩‍💻
// 3. Navigator 🧭

// 👉  take a few mins to write the pseudocode first
// create the function and decide what params it needs and what it will return here:

// SUDO CODE
// 1. create a function that takes in an array and a target
// 2. start for loop with iteration variable i, checking if i < array length each time, and incrementing i each loop
// 3. start nested for loop with iteration variable j, with same logic as outer loop
// 4. inside the inner loop check if array at i plus array at j adds up to target
// 5. if it does return an array with i and j























function twoSum(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target)
                return [i, j]
        }
    }
}

const arr1 = [2, 11, 7, 15]
const arr2 = [3, 2, 4]
const arr3 = [3, 3]

console.log(twoSum(arr1, 9))
console.log(twoSum(arr2, 6))
console.log(twoSum(arr3, 6))