/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
    // Function to perform randomized quicksort
    const randomizedQuickSort = (arr, low, high) => {
        if (low < high) {
            const pivotIndex = partition(arr, low, high);
            randomizedQuickSort(arr, low, pivotIndex - 1);
            randomizedQuickSort(arr, pivotIndex + 1, high);
        }
    };

    // Function to partition the array
    const partition = (arr, low, high) => {
        const randomIndex = Math.floor(Math.random() * (high - low + 1)) + low;
        swap(arr, randomIndex, high);

        const pivot = arr[high];
        let i = low - 1;

        for (let j = low; j < high; j++) {
            if (arr[j] < pivot) {
                i++;
                swap(arr, i, j);
            }
        }

        swap(arr, i + 1, high);
        return i + 1;
    };

    // Function to swap elements in the array
    const swap = (arr, i, j) => {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    };

    randomizedQuickSort(nums, 0, nums.length - 1);
    return nums;
};