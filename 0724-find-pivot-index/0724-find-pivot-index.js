/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let leftSum = 0;
  let rightSum = 0;

  for (let num of nums) {
    rightSum += num;
  }

  for (let i = 0; i < nums.length; i++) {
    let curr = nums[i];
    rightSum -= curr;

    if (rightSum === leftSum) {
      return i;
    }

    leftSum += curr;
  }
  return -1;
};