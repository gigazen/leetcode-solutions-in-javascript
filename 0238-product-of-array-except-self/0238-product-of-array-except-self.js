/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  const length = nums.length;
  const result = new Array(length).fill(1);

  // Calculate the product of elements before the current index
  let productBefore = 1;
  for (let i = 0; i < length; i++) {
    result[i] *= productBefore;
    productBefore *= nums[i];
  }

  // Calculate the product of elements after the current index
  let productAfter = 1;
  for (let i = length - 1; i >= 0; i--) {
    result[i] *= productAfter;
    productAfter *= nums[i];
  }

  return result;
};