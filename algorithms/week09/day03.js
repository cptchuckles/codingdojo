// #1 Missing Value

// You are given an array with the length of n that contains in no order integers from 0 to n.
// The length of the array is n and the largest number is no bigger than n.

// Quickly determine and return the missing value.

// The short version: If I give you an array of 0-9 and it's missing a number, how do you find it?

// quickly: O(n)
// no space constraints

// given [3, 0, 1]
// return 2

// given [5, 2, 7, 8, 4, 9, 3, 0, 1]
// return 6


function missingValue(arr) {
    const bobject = arr.reduce((acc, n, i) => {
        acc.sum += n;
        acc.expectedSum += i + 1;
        return acc;
    }, { sum: 0, expectedSum: 0 });
    return bobject.expectedSum - bobject.sum;
}

console.log(missingValue([3,0,1]), "should be", 2)
console.log(missingValue([5, 2, 7, 8, 4, 9, 3, 0, 1]), "should be", 6)




// #2 Min of Sorted-Rotated

// You are given an an array of integers with a length of up to 255 thousand.
// This array has first been sorted, then rotated by an unknown amount.

// Find and return the minimum value.

// Ninja Goal: Do this faster than 0(n) ie: find your answer without visiting every single element
// (think binary search)

const rotated1 = [13, 17, 18, 3, 5, 6, 8, 9, 10]
// return 3

function minOfSortedRotated(arr, left=0, right=arr.length-1) {
    if (right - left <= 1) {
        return arr[right];
    }

    const mid = Math.floor((left + right) / 2);

    if (arr[left] > arr[mid]) {
        return minOfSortedRotated(arr, left, mid);
    }
    else {
        return minOfSortedRotated(arr, mid, right);
    }
}

console.log(minOfSortedRotated(rotated1), "should be", 3)
