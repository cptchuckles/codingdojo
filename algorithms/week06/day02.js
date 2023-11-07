/* 
  Array: Binary Search (non recursive)
  Given a sorted array and a value, return whether the array contains that value.
  Do not sequentially iterate the array. Instead, ‘divide and conquer’,
  taking advantage of the fact that the array is sorted .
  Bonus (alumni interview): 
    first complete it without the bonus, because they ask for additions
    after the initial algo is complete
    return how many times the given number occurs
*/

const nums1 = [1, 3, 5, 6];
const searchNum1 = 4;
const expected1 = false;

const nums2 = [4, 5, 6, 8, 12];
const searchNum2 = 5;
const expected2 = 1 //true; //1 for bonus

const nums3 = [3, 4, 6, 8, 12];
const searchNum3 = 3;
const expected3 = 1 //true; //1 for bonus

// bonus, how many times does the search num appear?
const nums4 = [2, 2, 2, 2, 3, 4, 5, 6, 7, 8, 9];
const searchNum4 = 2;
const expected4 = 4;

/**
 * Efficiently determines if the given num exists in the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedNums
 * @param {number} searchNum
 * @returns {boolean} Whether the given num exists in the given array.
 */
function binarySearch(sortedNums, searchNum) {
    let low=0, high=sortedNums.length-1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        const n = sortedNums[mid];
        if (n === searchNum) {
            let count = 1;
            for (let i=mid-1, j=mid+1;; i--, j++) {
                let done = true;
                if (sortedNums[i] === searchNum) {
                    done = false;
                    count++;
                }
                if (sortedNums[j] === searchNum) {
                    done = false;
                    count++;
                }
                if (done) {
                    break;
                }
            }
            return count;
        }
        if (n > searchNum) {
            high = mid - 1;
        }
        else {
            low = mid + 1;
        }
    }
    return false;
}


console.log(binarySearch(nums1, searchNum1), "should be", expected1); // false
console.log(binarySearch(nums2, searchNum2), "should be", expected2); // true (1 for bonus)
console.log(binarySearch(nums3, searchNum3), "should be", expected3); // true (1 for bonus)

// bonus, how many times does the search num appear?
console.log(binarySearch(nums4, searchNum4), "should be", expected4); // 4
