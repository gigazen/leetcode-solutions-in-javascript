/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  for (let num of nums) {
    const indexForThisValue = Math.abs(num) - 1;
    if (nums[indexForThisValue] > 0) {
      nums[indexForThisValue] *= -1;
    }
  }

  let resultIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      nums[resultIndex] = i + 1;
      resultIndex++;
    }
  }
  return nums.slice(0, resultIndex);
};