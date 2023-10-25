/* 
    https://visualgo.net/en/sorting
    Selection sort works by iterating through the list, finding the minimum
    value, and moving it to the beginning of the list. Then, ignoring the first
    position, which is now sorted, iterate through the list again to find the
    next minimum value and move it to index 1. This continues until all values
    are sorted.
    Unstable sort.
    Time Complexity
        - Best: O(n^2) quadratic.
        - Average: O(n^2) quadratic.
        - Worst: O(n^2) quadratic.
    
    Space: O(1) constant.
    Selection sort is one of the slower sorts.
        - ideal for: pagination, where page 1 displays 10 records for example,
        you run selection sort for 10 iterations only to display the first 10
        sorted items...
*/
const myArr = [3,2,9,5,1,4,8]
const arrTest = [4, 5, 1, 3, 6, 7, 10, 2, 8, 9]

// ALGO ROLES
// 👉 Driver
// 👉 Presenter
// 👉 Navigator

function selectionSort(arr){
    for (let i = 0; i < arr.length; i++) {
        // setting minInd to i
        let minInd = i
        for (let j = 0 + i; j < arr.length; j++) {
            // if arr at minIdx is less than arr at j set minIdx equal to j
            if (arr[minInd] > arr[j])
                minInd = j
        }
        // setting temp var to arr at position i
        let temp = arr[i]
        // setting arr at position i to arr at position minIdx
        arr[i] = arr[minInd]
        // setting arr at minInd to temp var
        arr[minInd] = temp
    }
    return arr
 }

// test cases
console.log(selectionSort(myArr));
console.log(selectionSort(arrTest));