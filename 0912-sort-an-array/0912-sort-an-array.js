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

  function partition(arr, l, r) {
    let pivot = nums[Math.floor(l + Math.random() * (r - l + 1))];
    while (l <= r) {
      while (arr[l] < pivot) {
        l++;
      }
      while (arr[r] > pivot) {
        r--;
      }
      if (l <= r) {
        [arr[l], arr[r]] = [arr[r], arr[l]];
        l++;
        r--;
      }
    }
    return l;
  }
};
