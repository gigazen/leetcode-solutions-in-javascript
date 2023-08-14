/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let numsSet = new Set(nums);

  return numsSet.size === nums.length ? false : true;
};
