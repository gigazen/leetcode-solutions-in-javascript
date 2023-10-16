/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  let result = [];
  let left = 1;
  let right = 1;

  for (let i = 0; i < nums.length; i++) {
    // compute left product for nums[i]
    result[i] = left;
    left *= nums[i];
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    // compute right product for nums[i] and multiply it with the left product
    result[i] *= right;
    right *= nums[i];
  }

  return result;
};