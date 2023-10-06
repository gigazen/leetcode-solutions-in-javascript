/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  quickSort(nums, 0, nums.length - 1);
  return nums;

  function quickSort(nums, left, right) {
    if (left < right) {
      let pIndex = partition(nums, left, right);

      quickSort(nums, left, pIndex - 1);
      quickSort(nums, pIndex, right);
    }
  }

  function partition(arr, left, right) {
    // randomly select pivot element
    let pivot = nums[Math.floor(left + Math.random() * (right - left + 1))];

    // two-pointer approach
    while (left <= right) {
      while (arr[left] < pivot) {
        left++;
      }
      while (arr[right] > pivot) {
        right--;
      }
      if (left <= right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
      }
    }
    return left;
  }
};