/**
 * @param {number[]} nums
 * @return {number[]}
 */
function sortArray(nums) {
  divideAndMergeSort(nums, [], 0, nums.length - 1);
  return nums;
}

// get the middle index of current subarray and recursively call divideAndMergeSort() fn on subarrays based on the middle index until one or empty element subarrays are reached
function divideAndMergeSort(nums, auxArr, left, right) {
  // base case: when left and right indexes are same ie subarray has just one element or is empty then stop sorting as one element subarray is already sorted
  if (left >= right) return;

  // divide: calculate middle index of current subarray
  const middle = Math.floor((right - left) / 2) + left;
  // recursively call this fn on left and right halves based on the middle index, to again get middle index of each subarray, and recursively call this fn on left and right halves based on the middle index, stop when one or empty element subarrays are reached
  divideAndMergeSort(nums, auxArr, left, middle);
  divideAndMergeSort(nums, auxArr, middle + 1, right);

  // start merging from one element subarrays using middle index
  mergeTheSorted(nums, auxArr, left, middle, right);
}

// *************
// compare the elements of already sorted subarrays and place the smaller element to the original array
function mergeTheSorted(nums, auxArr, left, middle, right) {
  // copy original array elements into an auxiliary array, so that auxiliary array elements can be checked and then placed in original array from beginning
  for (let i = left; i <= right; i++) {
    auxArr[i] = nums[i];
  }

  // compare elements in the left and right halves and place the smaller element to the original array
  for (let i = left, j = middle + 1, k = left; k <= right; k++) {
    // check whether one of the halves completely processed then elements from other half also get placed
    if (i > middle) nums[k] = auxArr[j++];
    else if (j > right) nums[k] = auxArr[i++];
    // checking and placing of elements of left and right halves start here
    else if (auxArr[i] < auxArr[j]) nums[k] = auxArr[i++];
    else nums[k] = auxArr[j++];
  }
}