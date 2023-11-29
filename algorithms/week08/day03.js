// Array: Insertion Sort

// visualization with playing cards (scroll down):
// https://www.khanacademy.org/computing/computer-science/algorithms/insertion-sort/a/insertion-sort

// array / bar visualization:
// https://www.hackerearth.com/practice/algorithms/sorting/insertion-sort/visualize/

function insertionSort(arr) {
    for (let i=1; i<arr.length; i++) {
        for (let j=i; j>0 && arr[j] < arr[j-1]; j--) {
            [arr[j], arr[j-1]] = [arr[j-1], arr[j]];
        }
    }
    return arr;
}

function insertionSortShift(arr) {
    for (let i=1; i<arr.length; i++) {
        const currentNum = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > currentNum) {
            arr[j + 1] = arr[j--];
        }
        arr[j+1] = currentNum;
    }
    return arr;
}

const testArr = [198, 34, 71, 98, 64, 17, 82, 638, 167, 2387];
const testAnswer = testArr.toSorted((a,b) => a-b);
console.log(insertionSort(testArr), "should be", testAnswer);
console.log(insertionSortShift(testArr), "should be", testAnswer);

//  - efficient for small data sets
//  - constant memory / space O(1)

// Time Complexity
//   - Best: n when array is already sorted
//   - Average: O(n^2)
//   - Worst: O(n^2) when the array is reverse sorted

// this sort splits the array into two portions (conceptually, not literally)

// the left portion will become sorted
// the right portion (that hasn't been iterated over yet) is unsorted

// shift or swap target element until it reaches desired position

// shifting steps:
//   1. consider the first item as sorted
//   2. move to the next item
//   3. store current item in a temp var (to make this position availale to shift items)
//   4. if item to the left of current is greater than current item,
//      shift the left item to the right
//   5. repeat step 4 as many times as needed
//   6. insert current item
//   7. move to the next item and repeat

// swap steps:
//   1. consider the first item as sorted
//   2. move to the next item
//   4. if item to left of current item is less than current, swap
//   5. repeat step 4 until item to left is less than current item
//   6. move to next item and repeat



let glass = "water";
let cup = "milk";

[glass, cup] = [cup, glass];

console.log(glass);
