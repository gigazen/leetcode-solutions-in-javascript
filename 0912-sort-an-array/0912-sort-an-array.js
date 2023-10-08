/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  quickSort(nums, 0, nums.length - 1);
  return nums;
};

function quickSort(nums, left, right) {
  if (left < right) {
    let pivotIndex = partition(nums, left, right);

    quickSort(nums, left, pivotIndex);
    quickSort(nums, pivotIndex + 1, right);
  }
}

function partition(arr, left, right) {
  // randomly select pivot element
  let randomPivotIndex = Math.floor(left + Math.random() * (right - left + 1));
  let pivot = arr[randomPivotIndex];

  // Swap the pivot element with the element at the right index
  [arr[randomPivotIndex], arr[right]] = [arr[right], arr[randomPivotIndex]];

  let i = left;

  for (let j = left; j < right; j++) {
    if (arr[j] < pivot) {
      // Swap elements at i and j if arr[j] is less than pivot
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
    }
  }

  // Swap pivot element back to its final position
  [arr[i], arr[right]] = [arr[right], arr[i]];

  return i;
}
