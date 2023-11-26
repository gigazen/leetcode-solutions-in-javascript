/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
function checkSubarraySum(nums, k) {
  const remIdxMap = new Map();
  let rngSum = 0;

  for (let i = 0; i < nums.length; i++) {
    rngSum += nums[i];
    const rem = rngSum % k;

    if (rem === 0 && i !== 0) return true;

    if (!remIdxMap.has(rem)) {
      remIdxMap.set(rem, i);
    } else if (i - remIdxMap.get(rem) >= 2) {
      return true;
    }
  }

  return false;
}