/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let obj = {};

  for (let i = 0; i < nums.length; i++) {
    let diffVal = target - nums[i];
    if (obj[diffVal] !== undefined) {
      return [i, obj[diffVal]];
    }

    obj[nums[i]] = i;
  }
  return "No match found";
};
