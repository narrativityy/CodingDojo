/**
  You are given an array prices where prices[i] is the price of a given stock on the ith day.

  You want to maximize your profit by choosing a single day to buy one stock and 
  choosing a different day in the future to sell that stock.

  Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
*/

var prices1 = [7, 1, 5, 3, 6, 4]
var expected1 = 5
// Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.

var prices2 = [5, 4, 3, 2, 1]
var expected2 = 0

var prices3 = [2, 9, 1, 7]
var expected3 = 7

var prices4 = [5,3,7,4,1]
var expected4 = 4

// no profit can be made

/**
 * Take an array of prices and return the maximum profit
 * @param {number[]} array of prices
 * @return {number} max profit
 */
function maxProfit(prices) {
    // setup
    var maxProfit = 0
    var currentMin = 0
    var currentMax = 0

    // work
    for (var i = 0; i < prices.length; i++) {
        if (prices[i] < prices[currentMin]) {
            currentMin = i
            currentMax = i
        }
        if (prices[i] > prices[currentMax]) {
            currentMax = i
        }
        maxProfit = Math.max(maxProfit, prices[currentMax] - prices[currentMin])
    }

    // return
    return maxProfit
}

console.log(maxProfit(prices1))
console.log(maxProfit(prices2))
console.log(maxProfit(prices3))
console.log(maxProfit(prices4))

// =======================================================================================================

/*
  There is a collection of input strings and a collection of query strings. 
  For each query string, determine how many times it occurs in the list of input strings. Return an array of the results.
  
*/

var stringList1 = ['ab', 'ab', 'abc']
var queries1 = ['ab', 'abc', 'bc']
var expected = [2, 1, 0]

/**
 * Return an array of integers representing the frequency of occurrence of each query string in string list 
 * @param {string[]} array of strings
 * @param {string[]} string to search for
 * @return {number[]} number of instances of each query string
 */
function matchingStrings(stringList, queries) {
    var count
    var instances = []
    for (var i = 0; i < queries.length; i++) {
        count = 0
        for (var j = 0; j < stringList.length; j++) {
            if (queries[i] == stringList[j])
                count++
        }
        instances.push(count)
    }
    return instances
}

// console.log(matchingStrings(stringList1, queries1))
