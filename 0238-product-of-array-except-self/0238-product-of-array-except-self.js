/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  if (nums === null || nums.length <= 1) {
    return [];
  }
    
  let runningProdFromLeft = 1,
    runningProdFromRight = 1;
  let result = new Array(nums.length).fill(1);

  for (let i = 0; i < nums.length; i++) {
    result[i] *= runningProdFromLeft;
    runningProdFromLeft *= nums[i];
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= runningProdFromRight;
    runningProdFromRight *= nums[i];
  }

  return result; 
};