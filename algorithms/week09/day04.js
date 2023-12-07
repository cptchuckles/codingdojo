// https://leetcode.com/problems/two-sum/

// Given an array of integers, return indices of the
// two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution,
// and you may not use the same element twice.

// the array is unsorted, contains no floats, and there may be duplicate values

const nums = [2, 11, 7, 15], target = 9

/**
 * Reterns the indices of two numbers from an array whose sum is target.
 *
 * @param {number[]} nums - The list of input numbers
 * @param {number} target - The desired sum
 * @returns {number[]} The indices of numbers whose sum is target
 */
const twoSums = (nums, target) => {
    const complements = {};
    for (let i=0; i<nums.length; i++) {
        const n = nums[i];
        if (n in complements) {
            return [complements[n], i];
        }
        complements[target - n] = i;
    }
    return [];
};

console.log(twoSums(nums, target));
