/* 
  Given a SORTED array of integers, return a deduped array 
  Because array elements are already in order, all duplicate values will be grouped together.
  Return a new array, don't alter original
*/

const nums1 = [1, 1, 1, 1];
const expected1 = [1];

const nums2 = [1, 1, 2, 2, 3, 3];
const expected2 = [1, 2, 3];

const nums3 = [7, 7, 28, 28, 56, 56];
const expected3 = [7, 28, 56];

const nums4 = [1, 1];
const expected4 = [1];

/**
 * De-dupes the given sorted array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {Array<number>} The given array deduped.
 */
function dedupeSorted(sortedNums) {
    const result = [];
    let last = sortedNums[0];
    for (let i=0; i<=sortedNums.length; i++) {
        const n = sortedNums[i]
        if (n !== last) {
            result.push(last);
            last = n;
        }
    }
    return result;
}

console.log(dedupeSorted(nums1), "should be", expected1); // [1]
console.log(dedupeSorted(nums2), "should be", expected2); // [1, 2, 3]
console.log(dedupeSorted(nums3), "should be", expected3); // [7, 28, 56]
console.log(dedupeSorted(nums4), "should be", expected4); // [1]

/* 
  Given two arrays, interleave them into one new array.
  The arrays may be different lengths. The extra items should be added to the
  back of the new array.
*/

const arrA1 = [1, 2, 3];
const arrB1 = ["a", "b", "c"];
const expected1B = [1, "a", 2, "b", 3, "c"];

const arrA2 = [1, 2];
const arrB2 = [3, 4, 6, 8];
const expected2B = [1, 3, 2, 4, 6, 8];

const arrA3 = [1, 3, 5, 7];
const arrB3 = [2, 4];
const expected3B = [1, 2, 3, 4, 5, 7];

const arrA4 = [];
const arrB4 = [42, 0, 6];
const expected4B = [42, 0, 6];

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
    const result = [];
    const end = Math.max(arr1.length, arr2.length);
    for (let i=0; i<end; i++) {
        if (i < arr1.length) {
            result.push(arr1[i]);
        }
        if (i < arr2.length) {
            result.push(arr2[i]);
        }
    }
    return result;
}

console.log(interleaveArrays(arrA1, arrB1), "should be", expected1B); // [1, "a", 2, "b", 3, "c"];
console.log(interleaveArrays(arrA2, arrB2), "should be", expected2B); // [1, 2, 3, 4, 6, 8];
console.log(interleaveArrays(arrA3, arrB3), "should be", expected3B); // [1, 2, 3, 4, 5, 7];
console.log(interleaveArrays(arrA4, arrB4), "should be", expected4B); // [42, 0, 6];
