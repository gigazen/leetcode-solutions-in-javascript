/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
    // Helper function to perform the partitioning step of quicksort
    const partition = (arr, low, high) => {
        const pivotIndex = Math.floor(Math.random() * (high - low + 1)) + low;
        const pivot = arr[pivotIndex];
        
        // Move the pivot to the end
        [arr[pivotIndex], arr[high]] = [arr[high], arr[pivotIndex]];
        
        let i = low - 1;

        for (let j = low; j < high; j++) {
            if (arr[j] < pivot) {
                i++;
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }

        // Move the pivot back to its final place
        [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
        
        return i + 1;
    };

    // Helper function to perform the quicksort
    const quicksort = (arr, low, high) => {
        if (low < high) {
            const pivotIndex = partition(arr, low, high);
            quicksort(arr, low, pivotIndex - 1);
            quicksort(arr, pivotIndex + 1, high);
        }
    };

    // Perform quicksort on the input array
    quicksort(nums, 0, nums.length - 1);

    return nums;
};