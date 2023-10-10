/**
 * @param {number[]} nums
 * @return {number[]}
 */
function sortArray(nums) {
  mergeSort(nums, [], 0, nums.length - 1);
  return nums;
}

function mergeSort(nums, aux, lo, hi) {
  if (lo >= hi) return;
  const mid = Math.floor((hi - lo) / 2) + lo;
  mergeSort(nums, aux, lo, mid);
  mergeSort(nums, aux, mid + 1, hi);
  merge(nums, aux, lo, mid, hi);
}

function merge(nums, aux, lo, mid, hi) {
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