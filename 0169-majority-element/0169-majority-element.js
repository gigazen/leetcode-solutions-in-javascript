/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let map = new Map();
  let arrLength = nums.length;
  let majorityThreshold = arrLength / 2;

  if (arrLength <= 2) return nums[0];

  for (let i = 0; i < arrLength; i++) {
    let currElement = nums[i];
    if (!map.has(currElement)) {
      map.set(currElement, 1);
    } else {
      map.set(currElement, map.get(currElement) + 1);
    }

    if (map.get(currElement) > majorityThreshold) return currElement;
  }
};