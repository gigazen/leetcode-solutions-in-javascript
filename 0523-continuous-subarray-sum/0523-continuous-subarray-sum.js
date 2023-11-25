/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {
  let sum = 0;
  const hash = {};
  hash[0] = -1;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    if (k != 0) sum %= k;

    if (hash[sum] !== undefined) {
      if (i - hash[sum] > 1) return true;
    } else {
      hash[sum] = i;
    }
  }

  return false;
};
