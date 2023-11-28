// MERN Algos Week 1 - Sorting Algorithms
// https://www.bigocheatsheet.com/

// Bubble Sort

// For every pair of adjacent indicies
// swap them if the item on the left is larger than the item on the right
// continue until array is fully sorted

function bubbleSort(arr) {
    for (let end=arr.length-1; end>0; end--) {
        let sorted = true;
        for (let i=0; i<end; i++) {
            if (arr[i] > arr[i+1]) {
                sorted = false;
                const tmp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = tmp;
            }
        }
        if (sorted === true) {
            break;
        }
    }
    return arr;
}

const arr1 = [78, 5, 678, 765, 456, 78, 265, 908];
console.log(bubbleSort([...arr1]), "should be", arr1.sort((a,b) => a-b))


// Time Complexity
// - BEST: n when array is sorted
// - AVERAGE: O(n^2)
// - WORST: O(n^2)

// https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/
