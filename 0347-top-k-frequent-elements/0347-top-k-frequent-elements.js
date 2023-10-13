/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  var map = new Map();
  var result = [];
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], map.get(nums[i]) + 1 || 1);
  }

  var arr = new Array(nums.length);
  map.forEach((val, key) => {
    if (arr[val] == undefined) {
      arr[val] = [key];
    } else {
      arr[val].push(key);
    }
  });

  for (let i = arr.length - 1; i >= 0; i--) {
    while (arr[i] !== undefined && arr[i].length !== 0) {
      result.push(arr[i].pop());
      k--;
      if (k == 0) return result;
    }
  }

  return nums;
};