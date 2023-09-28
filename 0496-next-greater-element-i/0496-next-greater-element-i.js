/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  // map to hold next greater elements from nums2 array
  let map = new Map();
  // stack array to calculate next greater element of current element of the second array 
  // if stack length is non-zero and current element is greater than stack top element then we got the next greater element of current element, to get stack top element `stack[stack.length - 1]` or `stack.at(-1)` can be used
  let stack = [];

  for (let num of nums2) {
    while (stack.length && num > stack[stack.length - 1]) {
      map.set(stack.pop(), num);
    }
    stack.push(num);
  }

  // for nums2 = [1, 3, 0, 4, 2] in above loop :
  // 1 → m[[X]], s[1] 
  // 3 → 3 > 1 → m[[1-3]], s[3] 
  // 0 → 0 < 3 → m[[X]], s[3, 0] 
  // 4 → 4 > 0 → m[[0-4]], s[3]; 4 > 3 → m[[3-4]], s[4] 
  // 2 → 2 < 4 → m[[X]], s[4, 2]. 
  // So [[1-3], [0-4], [3-4]] in map

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
