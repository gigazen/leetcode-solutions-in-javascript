/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  if (nums.length === 1) {
    return nums;
  }
  let mid = Math.round(nums.length / 2);
  if (nums.length < 2) {
    return;
  }
  let left = [];
  let right = [];
  for (let i = 0; i < mid; i++) {
    left.push(nums[i]);
  }

  for (let j = mid; j < nums.length; j++) {
    right.push(nums[j]);
  }

  sortArray(left);
  sortArray(right);
  mergeSortedArray(left, right, nums);

  return nums;
};

function mergeSortedArray(left, right, nums) {
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      nums[k] = left[i];
      i++;
    } else {
      nums[k] = right[j];
      j++;
    }
    k++;
  }

  while (j < right.length) {
    nums[k] = right[j];
    j++;
    k++;
  }

  while (i < left.length) {
    nums[k] = left[i];
    k++;
    i++;
  }

  return nums;
}