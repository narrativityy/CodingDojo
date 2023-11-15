/*
  Interview Question:
  Given a string
  return whether or not it's possible to make a palindrome out of the string's characters
  What is it about a string that makes it possible for it to be a palindrome?
  Determine whether or not it is possible for the string's characters to be
  rearranged into a palindrome.
*/

// racecar
// radar
// tacocat
// levle
// kayak

const str1 = "";
const expected1 = false;

const str2 = "a";
const expected2 = true;

const str3 = "ddaa";
const expected3 = true;
// Explanation: "daad" or "adda"

const str4 = "dda";
const expected4 = true;
// Explanation: "dad"

//                V
const str5 = "aadda";
const expected5 = true;
// Explanation: "daaad"


const str6 = "abc";
const expected6 = false;

// racecar

//     v
// baabcceee

/* 
  For a string to be able to be re-ordered into a palindrome
  It must have an even occurrence of every character
  Unless it is odd length, then it can have 1 character that
  can have an odd number of occurrences.
  Another way to look at it would be, if you cancel out ever char that has a pair,
  it can be a palindrome if you are left with 0 or 1 char remaining:
    - "dad" the "d" cancels with itself to leave "a"
    - "daad" the "d" and "a" cancel with itself to leave nothing
    - "daam" the "a" cancels with itself leaving "dm", more than 1 char remaining, can't be palindrome
*/

function canBecomePalindrome(str) { 
    // check if string length is 0, return false if so
    if (str.length === 0)
        return false

    // initialize an empty object to store character count
    let charCount = {}

    // for loop to populate charCount variable
    for (let i = 0; i < str.length; i++) {
        // if there is to value at key location set it to 1
        if (charCount[str.charAt(i)] === undefined) {
            charCount[str.charAt(i)] = 1
        }
        // else add 1 to the previous count
        else {
            charCount[str.charAt(i)] += 1
        }
    }

    // checking if the string length is odd
    if (str.length % 2 === 1) {
        // initializing oddNumCount to 0 to track the amount of odd character occurances
        let oddNumCount = 0
        // iterating through our object to check if the character occurances are odd
        for (let key in charCount) {
            if (charCount[key] % 2 === 1) {
                // if oddNumCount surpasses 1 return false
                if (oddNumCount >= 1)
                    return false
                oddNumCount++
            }
        }
        // return true after the for loop if the false condition was not met
        return true
    }

    // if the string length is even
    else {
        // iterating through object
        for (let key in charCount) {
            // checking to see  if there are any odd amount of character occurances
            if (charCount[key] % 2 === 1) {
                // return false if so
                return false
            }
        }
        // return true if there were no false conditions
        return true
    }
}

// console.log(canBecomePalindrome(str1));
// console.log(canBecomePalindrome(str2));
// console.log(canBecomePalindrome(str3));
// console.log(canBecomePalindrome(str4));
// console.log(canBecomePalindrome(str5));
// console.log(canBecomePalindrome(str6));

console.log(canBecomePalindrome(str1) === expected1);
console.log(canBecomePalindrome(str2) === expected2);
console.log(canBecomePalindrome(str3) === expected3);
console.log(canBecomePalindrome(str4) === expected4);
console.log(canBecomePalindrome(str5) === expected5);
console.log(canBecomePalindrome(str6) === expected6);