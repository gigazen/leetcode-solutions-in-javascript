/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let indexOfFinalArr = 0;
  for (let num of nums) {
    if (num !== val) {
      nums[indexOfFinalArr] = num;
      indexOfFinalArr++;
    }
  }

  return indexOfFinalArr;
};