/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  let map = new Map();

  for (let j = 0; j < nums2.length; j++) {
    for (let k = j; k < nums2.length; k++) {
      if (nums2[j] < nums2[k]) {
        map.set(nums2[j], nums2[k]);
        break;
      } else {
        map.set(nums2[j], -1);
      }
    }
  }

  let resultArr = [];

  for (let i = 0; i < nums1.length; i++) {
    if (map.has(nums1[i])) {
      resultArr.push(map.get(nums1[i]));
    }
  }

  return resultArr;
};