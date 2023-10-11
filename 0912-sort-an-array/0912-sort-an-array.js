/**
 * @param {number[]} nums
 * @return {number[]}
 */
function sortArray(nums) {
  divideAndMergeSort(nums, [], 0, nums.length - 1);
  return nums;
}

function divideAndMergeSort(nums, aux, lo, hi) {
  if (lo >= hi) return;

  const mid = Math.floor((hi - lo) / 2) + lo;
  divideAndMergeSort(nums, aux, lo, mid);
  divideAndMergeSort(nums, aux, mid + 1, hi);

  mergeTheSorted(nums, aux, lo, mid, hi);
}

function mergeTheSorted(nums, aux, lo, mid, hi) {
  for (let i = lo; i <= hi; i++) {
    aux[i] = nums[i];
  }

  for (let i = lo, j = mid + 1, k = lo; k <= hi; k++) {
    if (i > mid) nums[k] = aux[j++];
    else if (j > hi) nums[k] = aux[i++];
    else if (aux[i] < aux[j]) nums[k] = aux[i++];
    else nums[k] = aux[j++];
  }
}