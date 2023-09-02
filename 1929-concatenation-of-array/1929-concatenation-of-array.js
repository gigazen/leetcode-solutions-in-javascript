/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
  let ans = nums.slice();
  for (let i = 0; i < nums.length; i++) {
    ans[i + nums.length] = nums[i];
  }
    
  return ans;
};
