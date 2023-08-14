/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let myArr = [];

  for (let i = 0; i < nums.length; i++) {
    if (!myArr.includes(nums[i])) {
      myArr.push(nums[i]);
    } else {
      return true;
    }
  }
  return false;
};
