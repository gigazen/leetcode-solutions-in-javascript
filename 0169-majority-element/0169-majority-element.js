/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let map = new Map();
  let minNumberOfTimes = nums.length / 2;

  for (let i = 0; i < nums.length; i++) {
    let currElement = nums[i];
    if (!map.has(currElement)) {
      map.set(currElement, 1);
    } else {
      map.set(currElement, map.get(currElement) + 1);
    }
  }

  for (let [key, value] of map.entries()) {
    if (value > minNumberOfTimes) return key;
  }
};