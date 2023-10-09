/* 
Given an array of ints representing a line of people where the space between
indexes is 1 foot, with 0 meaning no one is there and 1 meaning someone is in
that space,
return whether or not there is at least 6 feet separating every person.
Bonus: O(n) linear time (avoid nested loops that cause re-visiting indexes).
*/

const queue1 = [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1];
const expected1 = false;

const queue2 = [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1];
const expected2 = true;

const queue3 = [1, 0, 0, 0, 0, 0, 0, 0, 1];
const expected3 = true;

const queue4 = [];
const expected4 = true;

/**
 * Determines whether each occupied space in the line of people is separated by
 * 6 empty spaces.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<0|1>} queue
 * @returns {Boolean}
 */
function socialDistancingEnforcer(queue) {
    let counter = -1
    
    for (let i = 0; i < queue.length; i++) {
        if (counter < 6 && queue[i] == 1 && counter != -1) {
            return false
        }
        if (queue[i] == 1) {
            counter = 0
        }
        else if (counter != -1) {
            counter++
        }
    }
    return true
}

console.log(socialDistancingEnforcer(queue1)) // false
console.log(socialDistancingEnforcer(queue2)) // true
console.log(socialDistancingEnforcer(queue3)) // true
console.log(socialDistancingEnforcer(queue4)) // true

const nums1 = [-2, 5, 7, 0, 3];
const expected_1 = 2;

const nums2 = [9, 9];
const expected_2 = -1;

const num3 = [1, 2, 3, 0, 6]
const expected_3 = 3

/**
 * Finds the balance index in the given array where the sum to the left of the
 *    index is equal to the sum to the right of the index.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number} The balance index or -1 if there is none.
 */
function balanceIndex(nums) {
    if (nums.length < 3) 
        return -1

    for (let i = 1; i < nums.length - 1; i++) {
        let sumLeft = 0;
        let sumRight = 0;

        for (let leftIdx = i - 1; leftIdx >= 0; leftIdx--) {
          sumLeft += nums[leftIdx];
        }

        for (let rightIdx = i + 1; rightIdx < nums.length; rightIdx++) {
          sumRight += nums[rightIdx];
        }

        if (sumLeft === sumRight) {
          return i;
        }
    }
}

console.log(balanceIndex(nums1)) // 2
console.log(balanceIndex(nums2)) // -1
console.log(balanceIndex(num3)) // 3