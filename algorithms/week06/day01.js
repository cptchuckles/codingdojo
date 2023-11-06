/* 
  Balance Index

  Here, a balance point is ON an index, not between indices.

  Return the balance index where sums are equal on either side
  (exclude its own value).

  Return -1 if none exist.

*/

const nums1 = [-2, 5, 7, 0, 3];
const expected1 = 2;

const nums2 = [9, 9];
const expected2 = -1;

//             →  →  →  →   →   →
//            [0, 1, 2, 6, 11, 15] ↓
//                      i   ←   ←
//            [         0   9  15]
const nums3 = [1, 1, 4, 5,  4,  2];
const expected3 = 3;

/**
 * Finds the balance index in the given array where the sum to the left of the
 *    index is equal to the sum to the right of the index.
 * - Time: O(n).
 * - Space: O(n).
 * @param {Array<number>} nums
 * @returns {number} The balance index or -1 if there is none.
 */
function balanceIndex(nums) {
    // accumulate and add left sums
    const sums = [];
    let acc = 0;
    for (let n of nums) {
        sums.push(acc);
        acc += n;
    }
    // accumulate and subtract right sums
    acc = 0;
    for (let i=nums.length-1; i>=0; i--) {
        if (sums[i] - acc === 0) {
            return i;
        }
        acc += nums[i] || 0;
    }
    return -1;
}

console.log(balanceIndex(nums1), "should be", expected1);
console.log(balanceIndex(nums2), "should be", expected2);
console.log(balanceIndex(nums3), "should be", expected3);

/*****************************************************************************/
