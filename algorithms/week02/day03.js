/*
  Input: a 2 dimensional array of integers
  Output: A 1 dimensional array of all the same elements preserving original order
*/

// this given array has a length of 3 because it has 3 arrays as items
const twoDimArr1 = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];
const expected1a = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const twoDimArr2 = [[1], [2], [3]];
const expected2a = [1, 2, 3];

const twoDimArr3 = [[], [], [10, 20]];
const expected3a = [10, 20];



/**
 * Flattens a two dimensional array into a new one dimensional array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<Array<any>>} twoDimArr An array of arrays of any data type.
 * @returns {Array<any>} The flattened array that should be one dimensional.
 */
function flatten2dArray(twoDimArr) {
	let returnArr = []
      for (let e of twoDimArr){
            returnArr = returnArr.concat(e);
      }
      return returnArr
}

console.log(flatten2dArray(twoDimArr1), "should be", expected1a);
console.log(flatten2dArray(twoDimArr2), "should be", expected2a);
console.log(flatten2dArray(twoDimArr3), "should be", expected3a);

/*
    Array: Second-Largest

    Return the second-largest element of an array, or null if there is none.

    Bonus: do it with one loop and no nested loops
  */

// 2nd largest is 2nd
const nums1 = [2, 3, 1, 4];
const expected1 = 3;

// largest is first
const nums2 = [4, 1, 3, 2];
const expected2 = 3;

// largest duplicated first
const nums3 = [4, 4, 4, 1, 3, 2];
const expected3 = 3;

// 2nd largest is first
const nums4 = [3, 1, 4, 2];
const expected4 = 3;

// largest is 2nd
const nums5 = [3, 4, 2, 1];
const expected5 = 3;

const nums6 = [3, 3];
const expected6 = null;

const nums7 = [2];
const expected7 = null;

const nums8 = [];
const expected8 = null;

/**
 * Finds the second largest int from the given array and returns it or null.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {?number} The second largest int from the given array or null.
 *    The ? in front means it's nullable.
 */
function secondLargest(nums) {
    let a = -Infinity
    let b = -Infinity
    for (let i = 0;i<nums.length;i++){
        if (nums[i] >= a){
            if (nums[i] > a) {
                b = a;
            }
            a = nums[i];
        } else if (nums[i] > b && nums[i] < a){
            b = nums[i]
        }
    }
    if (b === -Infinity){
        return null
    } else {
        return b
    }
}

console.log(secondLargest(nums1), "should be", expected1);
console.log(secondLargest(nums2), "should be", expected2);
console.log(secondLargest(nums3), "should be", expected3);
console.log(secondLargest(nums4), "should be", expected4);
console.log(secondLargest(nums5), "should be", expected5);
console.log(secondLargest(nums6), "should be", expected6);
console.log(secondLargest(nums7), "should be", expected7);
console.log(secondLargest(nums8), "should be", expected8);
