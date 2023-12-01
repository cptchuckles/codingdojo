// https://opendsa-server.cs.vt.edu/embed/quicksortAV
// https://www.youtube.com/watch?v=ZZuD6iUe3Pc
// https://upload.wikimedia.org/wikipedia/commons/8/84/Lomuto_animated.gif


function swap(arr, i, j) {
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}


/**
 * Steps:
 * 1. Pick an item out of the arr to be your pivot value
 *   - usually the middle item or the last item
 * 2. Partition the array IN PLACE such that all values less than the pivot are to the left of it
 *    and all values greater than the pivot are to the right (not perfectly sorted)
 * 3. return: new idx of the pivot value
 *
 * @param {number[]} arr The array of unsorted numbers
 * @param {number?} left The index of the beginning of the partition
 * @param {number?} right The inclusive index of the end of the partition
 */
function partition(arr, left = 0, right = arr.length - 1) {
    const middle = Math.floor((left + right) / 2);
    // console.log(left,arr[middle],right);
    swap(arr, middle, right);

    const num = arr[right];

    let l=left, r=right-1;

    while (l<=r) {
        while (arr[l] <= num && l<=r) {
            l++;
        }
        while (arr[r] >= num && l<=r) {
            r--;
        }
        if (l<r) {
            swap(arr, l, r);
            // console.log("("+arr.toString()+")");
        }
    }

    swap(arr, l, right);

    // console.log(arr.toString());
    return l;
}


/**
 * Params: arr, left, right
 * - for now, left will be 0, and right will be the last idx
 * - later these params will be used to specify a sub section of the array to partition
 *
 * @param {number[]} arr The array of unsorted numbers
 * @param {number?} left The index of the beginning of the partition
 * @param {number?} right The inclusive index of the end of the partition
 * @returns {number[]} The sorted numbers
 */
function quickSort(arr, left = 0, right = arr.length - 1) {
    if (right - left <= 0) {
        return arr;
    }
    const pivotIdx = partition(arr, left, right);
    quickSort(arr, left, pivotIdx-1);
    quickSort(arr, pivotIdx+1, right);
    return arr;
}

const testArr = [570, 718, 900, 252, 597, 789, 312, 602];
// console.log(testArr.toString());
console.log(quickSort(testArr));
