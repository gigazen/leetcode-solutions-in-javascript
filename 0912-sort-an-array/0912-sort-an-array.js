/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortArray = (nums) => {
  // Quick sort function
  const quickSort = (nums, start, end) => {
    // If start and end index cross, array is sorted
    if (start >= end) {
      return;
    }

    // Set left and right pointers
    let left = start, right = end;

    // Choose pivot element
    let pivot = nums[Math.floor((start + end) / 2)];

    // Partition array
    while (left <= right) {
      while (left <= right && nums[left] < pivot) {
        left++;
      }
      while (left <= right && nums[right] > pivot) {
        right--;
      }
      if (left <= right) {
        let temp = nums[left];
        nums[left] = nums[right];
        nums[right] = temp;
        left++;
        right--;
      }
    }

    // Recursively sort left and right partitions
    quickSort(nums, start, right);
    quickSort(nums, left, end);
  }

  // Call quick sort function with initial start and end indices
  quickSort(nums, 0, nums.length - 1);
  
  // Return sorted array
  return nums;
}
