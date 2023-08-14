/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let numsSet = new Set();

  for (let num of nums) {
    if (numsSet.has(num)) return true;

    numsSet.add(num);
  }

  return false;
};
