/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  // map to hold nums2 element - next greater element
  let map = new Map();
  // stack array to push last element from nums2 and pop it only when element greater than last element is found
  let stack = [];

  for (let num of nums2) {
    while (stack.length && stack[stack.length - 1] < num) {
      map.set(stack.pop(), num);
    }
    stack.push(num);
  }

  // for nums2 = [1, 3, 0, 4, 2] in above loop :
  // 1 → X, [1]; 3 → 1-3, [3]; 0 → X, [3, 0]; 4 → 0-4, 3-4, [4]; 2 → [4, 2]. So 1-3; 0-4; 3-4 in map

  // output array
  let ans = [];

  // check whether an element of nums1 is present in above hashmap, if present then return its value from map and push it to output array. And if not present in map then push -1 to output array
  for (let i = 0; i < nums1.length; i++) {
    let currentEl = nums1[i];
    if (map.has(currentEl)) {
      ans.push(map.get(currentEl));
    } else {
      ans.push(-1);
    }
  }

  return ans;
};