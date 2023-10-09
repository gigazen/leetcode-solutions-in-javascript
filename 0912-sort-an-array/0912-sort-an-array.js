/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  return mergeSort(nums);
};

function mergeSort(nums) {
  if (nums.length < 2) return nums;

  let middle = Math.floor(nums.length / 2);
  let left = nums.slice(0, middle);
  let right = nums.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let sortedArr = [];
  let l = 0;
  let r = 0;

  while (l < left.length && r < right.length) {
    if (left[l] <= right[r]) {
      sortedArr.push(left[l]);
      l++;
    } else {
      sortedArr.push(right[r]);
      r++;
    }
  }
  return [...sortedArr, ...left.slice(l), ...right.slice(r)];
}