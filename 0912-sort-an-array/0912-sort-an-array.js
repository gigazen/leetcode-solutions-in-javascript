/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  quickSort(nums, 0, nums.length - 1);
  return nums;

  function quickSort(nums, left, right) {
    if (left >= right) return;

    let index = partition(nums, left, right);

    quickSort(nums, left, index - 1);
    quickSort(nums, index, right);
  }

  function partition(arr, leftIndex, rightIndex) {
    let pivot =
      nums[
        Math.floor(leftIndex + Math.random() * (rightIndex - leftIndex + 1))
      ];
    while (leftIndex <= rightIndex) {
      while (arr[leftIndex] < pivot) {
        leftIndex++;
      }
      while (arr[rightIndex] > pivot) {
        rightIndex--;
      }
      if (leftIndex <= rightIndex) {
        [arr[leftIndex], arr[rightIndex]] = [arr[rightIndex], arr[leftIndex]];
        leftIndex++;
        rightIndex--;
      }
    }
    return leftIndex;
  }
};
