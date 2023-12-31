/* 
Given an array of numbers,
return a count of how many are both even and negative.
*/

const nums1 = [1, 5, -1, 2, -4, 9, -10, 0, -3, -2];
const expected1 = 3;

const nums2 = [];
const expected2 = 0;

const nums3 = [-4, -2, -6];
const expected3 = 3;

/**
 * Counts how many numbers are both even and negative.
 * @param {number} nums
 * @returns {number} The count.
 */
function countEvenNegatives(nums) {
	let count = 0;
	for (let i=0; i<nums.length; i++) {
		if (nums[i] < 0 && nums[i] % 2 === 0) {
			count += 1;
		}
	}
	return count;
}

const result1a = countEvenNegatives(nums1);
console.log(result1a + " should be " + expected1);
const result1b = countEvenNegatives(nums2);
console.log(result1b + " should be " + expected2);
const result1c = countEvenNegatives(nums3);
console.log(result1c + " should be " + expected3);

/*****************************************************************/


/* 
Write two functions:

1. A function that returns a new string that is the given string with the first
  letter capitalized.

2. Given an array of strings,
  return the same array with the first letter of each string capitalized using
  the previously created helper function.

HINT: strings are immutable so to change a string you must create a new version
of it.
*/

/* Tests for capitalize function */
const string1 = "hello";
const expected2a = "Hello";

const string2 = "";
const expected2b = "";

/**
 * Capitalizes the first letter of the given string.
 * @param {string} string The string to capitalize.
 * @returns {string} The given string with the first letter capitalized or an
 *    empty string.
 */
function capitalize(string) {
	let result = "";
	for (let i=0; i<string.length; i++) {
		if (i===0) {
			result += string[i].toUpperCase();
		}
		else {
			result += string[i];
		}
	}
	return result;
}


const result2a = capitalize(string1);
console.log(result2a + " should be " + expected2a);
const result3a = capitalize(string2);
console.log(result3a + " should be " + expected2b);

/* Tests for capitalization function */
const strings1 = ["hello", "world"];
const expectedStrings1 = ["Hello", "World"];

/**
 * Capitalizes the first letter of each string in the given array.
 * @param {Array<string>} strings
 * @returns {Array<string>} The same given array with updated items.
 */
function capitalization(strings) {
	for (let i=0; i<strings.length; i++) {
		strings[i] = capitalize(strings[i]);
	}
	return strings;
}

const result2b = capitalization(strings1);
console.log(result2b + " should be " + expectedStrings1);
