/* 
  Given an array of integers
  return the index where the smallest integer is located

  return -1 if there is no smallest integer (array is empty) 
  since -1 is not a valid index, this indicates it couldn't be found

  If the smallest integer occurs more than once, return the index of the first one.
*/

const nums1 = [5, 2, 3];
const expected1a = 1;

const nums2 = [5, 4, 2, 2, 3];
const expected2a = 2;

const nums3 = [];
const expected3a = -1;

const nums4 = [5, 4, 2, -1, 3];
const expected4a = 3;

/**
 * Returns the index of the smallest number from the given array.
 * - Time: O(n).
 * - Space: O(1).
 * @param {Array<number>} nums
 * @returns {number} Index of smallest number or -1 if empty given array.
 */
function indexOfMinVal(nums) {
	let smollestIndex = -1;
	for (let i=0; i<nums.length; i++) {
		if (smollestIndex < 0 || nums[i] < nums[smollestIndex]) {
			smollestIndex = i;
		}
	}
	return smollestIndex;
}

console.log(indexOfMinVal(nums1), "should be", expected1a);
console.log(indexOfMinVal(nums2), "should be", expected2a);
console.log(indexOfMinVal(nums3), "should be", expected3a);
console.log(indexOfMinVal(nums4), "should be", expected4a);

/*******************************************************************************/

/* 
  Given an array, reverse it's items in place
  return the array after reversing it

  Do it in place without using any built in methods
*/

const arr1 = [1, 2, 3];
const expected1 = [3, 2, 1];

const arr2 = ["a", "b"];
const expected2 = ["b", "a"];

const arr3 = ["a"];
const expected3 = ["a"];

const arr4 = [];
const expected4 = [];

const arr5 = ["c","h","u","n","g","u","s","a","m","o","g","u","s"];
const expected5 = ["s","u","g","o","m","a","s","u","g","n","u","h","c"];

/**
 * Reverses the given arr in place without built in methods
 * BONUS: Do this in place without built ins
 * - Time: O(n).
 * - Space: O(1).
 * @param {Array<any>} items
 * @returns {Array<any>} The given arr after being reversed.
 */
function reverseArr(items) {
	for (let i=0, j=items.length-1; i<j; i++, j--) {
		let k = items[i];
		items[i] = items[j];
		items[j] = k;
	}
	return items;
}

console.log(reverseArr(arr1), "should be", expected1);
console.log(reverseArr(arr2), "should be", expected2);
console.log(reverseArr(arr3), "should be", expected3);
console.log(reverseArr(arr4), "should be", expected4);
console.log(reverseArr(arr5), "should be", expected5);
