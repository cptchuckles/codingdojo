/* 
  Recursively sum an arr of ints
*/

const nums1 = [1, 2, 3];
const expected1 = 6;

const nums2 = [1];
const expected2 = 1;

const nums3 = [];
const expected3 = 0;

const nums4 = [1, 2, 3, 4, 5];
const expected4 = 15;

/**
 * Add params if needed for recursion
 * Recursively sums the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number} The sum of the given nums.
 */
function sumArr(nums) {
    if (nums.length === 0) {
        return 0;
    }
    return nums[0] + sumArr(nums.slice(1));
}

console.log(sumArr(nums1), "should be", expected1);
console.log(sumArr(nums2), "should be", expected2);
console.log(sumArr(nums3), "should be", expected3);
console.log(sumArr(nums4), "should be", expected4);

/*****************************************************************************/
