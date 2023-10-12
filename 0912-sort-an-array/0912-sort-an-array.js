/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  quickSort(nums, 0, nums.length - 1);
  return nums;
};

function quickSort(nums, lo, hi) {
  if (lo >= hi) return;

  let index = partition(nums, lo, hi);

  quickSort(nums, lo, index - 1);
  quickSort(nums, index, hi);
}

function partition(arr, lo, hi) {
  let randomPivotIndex = Math.floor(lo + Math.random() * (hi - lo + 1));
  let pivot = arr[randomPivotIndex];

  while (lo <= hi) {
    while (arr[lo] < pivot) {
      lo++;
    }
    while (arr[hi] > pivot) {
      hi--;
    }
    if (lo <= hi) {
      [arr[lo], arr[hi]] = [arr[hi], arr[lo]];
      lo++;
      hi--;
    }
  }

  return lo;
}