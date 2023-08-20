/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let diffVal = target - nums[i];
    if (map.has(diffVal)) {
      return [i, map.get(diffVal)];
    }
    map.set(nums[i], i);
  }
  return;
};