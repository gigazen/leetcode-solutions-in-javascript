/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  quickSort(nums, 0, nums.length - 1);
  return nums;

  function quickSort(nums, left, right) {
    if (left < right) {
      let pivotIndex = partition(nums, left, right);

      quickSort(nums, left, pivotIndex - 1);
      quickSort(nums, pivotIndex + 1, right);
    }
  }

  function partition(arr, left, right) {
    // randomly select an index and swap element at that index and at right index, make right index element as pivot element
    let randomIndex = Math.floor(left + Math.random() * (right - left + 1));
    [nums[randomIndex], nums[right]] = [nums[right], nums[randomIndex]];

    let pivot = right;
    let j = left;
    let i = left - 1;

    // two-pointer approach
    while (j <= pivot) {
      if (nums[j] < nums[pivot]) {
        i++;
        [nums[i], nums[j]] = [nums[j], nums[i]];
        j++;
      } else {
        j++;
      }
    }

    i++;
    [nums[i], nums[pivot]] = [nums[pivot], nums[i]];

    return i;
  }
};

console.log(sortArray([5, 2, 3, 1])); // [1, 2, 3, 5]
console.log(sortArray([5, 1, 1, 2, 0, 0])); // RangeError: Maximum call stack size exceeded
