/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
  let rightMax = -1;
  for (let i = arr.length - 1; i >= 0; i--) {
    let newMax = Math.max(arr[i], rightMax);
    arr[i] = rightMax;
    rightMax = newMax;
  }
  return arr;
};