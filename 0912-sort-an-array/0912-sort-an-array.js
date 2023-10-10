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

function merge(leftArr, rightArr) {
  let sortedArr = [];
  let l = 0;
  let r = 0;

  while (l < leftArr.length && r < rightArr.length) {
    if (leftArr[l] <= rightArr[r]) {
      sortedArr.push(leftArr[l]);
      l++;
    } else {
      sortedArr.push(rightArr[r]);
      r++;
    }
  }

  return [...sortedArr, ...leftArr.slice(l), ...rightArr.slice(r)];
}