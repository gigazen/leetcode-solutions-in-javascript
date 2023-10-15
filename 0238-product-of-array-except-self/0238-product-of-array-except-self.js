/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let mul = 1;
  let hasZero = false;
  let zeroCount = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      mul *= nums[i];
    } else {
      zeroCount += 1;
      hasZero = true;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (!hasZero) {
      nums[i] = mul / nums[i];
    } else if (nums[i] !== 0) {
      nums[i] = 0;
    } else if (zeroCount > 1) {
      nums[i] = 0;
    } else {
      nums[i] = mul;
    }
  }

  return nums;
};