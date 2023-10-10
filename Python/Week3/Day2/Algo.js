/* 
  Given two arrays, interleave them into one new array.

  The arrays may be different lengths. The extra items should be added to the
  back of the new array.
*/

const arrA1 = [1, 2, 3];
const arrB1 = ["a", "b", "c"];
const expected1 = [1, "a", 2, "b", 3, "c"];

const arrA2 = [1, 3];
const arrB2 = [2, 4, 6, 8];
const expected2 = [1, 2, 3, 4, 6, 8];

const arrA3 = [1, 3, 5, 7];
const arrB3 = [2, 4];
const expected3 = [1, 2, 3, 4, 5, 7];

const arrA4 = [];
const arrB4 = [42, 0, 6];
const expected4 = [42, 0, 6];

/**
 * Interleaves two arrays into a new array. Interleaving means alternating
 * the items starting from the first array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} arr1
 * @param {Array<any>} arr2
 * @returns {Array<any>} A new array of interleaved items.
 */
function interleaveArrays(arr1, arr2) {
    let newArr = []

    for (let i = 0; i < Math.max(arr1.length, arr2.length); i++) {
        if (i < arr1.length)
            newArr.push(arr1[i])
        if (i < arr2.length)
            newArr.push(arr2[i])
    }
    return newArr
}

console.log(interleaveArrays(arrA1, arrB1))
console.log(interleaveArrays(arrA2, arrB2))
console.log(interleaveArrays(arrA3, arrB3))
console.log(interleaveArrays(arrA4, arrB4))

/* 
  Array: Binary Search (non recursive)

  Given a sorted array and a value, return whether the array contains that value.
  Do not sequentially iterate the array. Instead, ‘divide and conquer’,
  taking advantage of the fact that the array is sorted .

  Bonus (alumni interview): 
    first complete it without the bonus, because they ask for additions
    after the initial algo is complete

    return how many times the given number occurs
*/

const two_numbers1 = [1, 3, 5, 6];
const two_searchNumber1 = 4;
const two_expected1 = false;

const two_numbers2 = [4, 5, 6, 8, 12];
const two_searchNumber2 = 5;
const two_expected2 = true;

const two_numbers3 = [3, 4, 6, 8, 12];
const two_searchNum3 = 3;
const two_expected3 = true;

// bonus, how many times does the search num appear?
const two_numbers4 = [2, 2, 2, 2, 3, 4, 5, 6, 7, 8, 9];
const two_searchNumber4 = 2;
const two_expected4 = 4;

/**
 * Efficiently determines if the given num exists in the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedNumbers
 * @param {number} searchNum
 * @returns {boolean} Whether the given num exists in the given array.
 */
function binarySearch(sortedNumbers, searchNum) {
    let low = 0
    let high = sortedNumbers.length - 1
    let mid = Math.floor((high + low) / 2)

    while(low <= high){
      if(sortedNumbers[mid] == searchNum){
        return true
      } else if (sortedNumbers[mid] < searchNum){
        low = mid + 1
      } else {
        high = mid - 1
      }
      mid = Math.floor((high + low) / 2)
    }
    return false
}

console.log(binarySearch(two_numbers1, two_searchNumber1))
console.log(binarySearch(two_numbers2, two_searchNumber2))
console.log(binarySearch(two_numbers3, two_searchNum3))
console.log(binarySearch(two_numbers4, two_searchNumber4))