// Array: Merge Sort
// visualization: https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/
// multiple sorts, visualized: https://i.imgur.com/fq0A8hx.gif

// Time Complexity
//  - Best case: O(n log(n)
//  - Average case: O(n log(n))
//   - Worst case: O(n log(n))

// MergeSort(arr[], l,  r)
// If r > l
//      1. Find the middle point to divide the array into two halves:
//              middle m = (l+r)/2
//      2. Call mergeSort for first half:
//              Call mergeSort(arr, l, m)
//      3. Call mergeSort for second half:
//              Call mergeSort(arr, m+1, r)
//      4. Merge the two halves sorted in step 2 and 3:
//              Call mergeSortedArrays(arr1, arr2)

// [1]
// []

/**
 * Merge Sort algorithm
 *
 * @param {number[]} arr Initial list of unsorted numbers
 * @returns {number[]}
 */
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle, arr.length);

    return mergeSortedArrays(mergeSort(left), mergeSort(right));
}

/**
 * Merge sorted arrays
 *
 * @param {number[]} left
 * @param {number[]} right
 * @returns {number[]}
 */
function mergeSortedArrays(left, right) {
    const result = [];
    const I=left.length, J=right.length;
    for (let i=0, j=0; i<I || j<J;) {
        result.push(
            (i==I ? Infinity : left[i]) < (j==J ? Infinity : right[j])
            ? left[i++]
            : right[j++]
        );
    }
    return result;
}

// console.log(mergeSortedArrays([1,5,10], [2,7,11]));
const testArr = [123,4,215,2,34,235,23,34];
console.log(mergeSort(testArr));

// //steps:
//     1. create a merge function to merge two already sorted arrays into a single sorted array
//       - you do NOT need to work in place, ok to use a new array
//     2. create merge sort function to sort the provided array
//       - split the array into half and recursively merge the halves
//       - splitting of arrays stops when array can no longer be split
//       - an array of 1 item is by definition sorted, so two arrays of 1 item can therefore be merged into a sorted array

//   useful methods
//   - var x = arr1.concat(array2, array3)
//     - combines array arg(s) with the array that concat is called on
//     - returns new arr w/o mutating originals


//   - arr.slice([begin[, end]])
//     - returns a copy of the specified portion of the array
//     - end is exclusive
//       - if omitted, slices from provided 'begin' to end of array

// var arr = [88, 22, 44, 12, 99, 111, 9, 15, 49]
// var m = Math.floor(arr.length / 2)
// var l = arr.slice(0, m);
// var r = arr.slice(m, arr.length);
