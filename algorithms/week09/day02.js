// This is an actual interview algorithm given to a Coding Dojo alum

// Find Consecutive Sums

// You are given arr, a list of positive integers 0-255
// You are given k, a integer between 1-255

// Find all the consecutive groups of integers that add up to the value k

// inputs
k = 16
arr = [2, 5, 3, 6, 7, 0, 0, 23, 11]

// outputs
// [
//   [2, 5, 3, 6],
//   [3, 6, 7]  // 3, 6, 7 appear consecutively, so they are including in the solution
//   [3, 6, 7, 0],
//   [3, 6, 7, 0, 0]
// ]

// create new arrays
// if no matches, return empty array

function findConsqSums(arr, k) {
    const result = [];
    for (let i=0; i<arr.length; i++) {
        let sum = 0;
        for (let j=i; j<arr.length; j++) {
            sum += arr[j];
            if (sum === k) {
                result.push(arr.slice(i, j+1));
            }
        }
    }
    return result;
}

function findConsqSumsSlidingWindow(arr, k) {
    const result = [];
    let runningSum = 0;
    for (let i=0, j=0; i<=j; runningSum -= arr[i++]) {
        while (runningSum <= k && j < arr.length) {
            if (runningSum === k) {
                result.push(arr.slice(i, j));
            }
            runningSum += arr[j++];
        }
    }
    return result;
}

console.log("O((n³+n)/2):", findConsqSums(arr, k));
console.log("O(n):", findConsqSumsSlidingWindow(arr, k));
