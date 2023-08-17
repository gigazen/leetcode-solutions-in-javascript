/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (i !== arr.length - 1) {
      arr[i] = Math.max(...arr.slice(i + 1));
    } else {
      arr[i] = -1;
    }
  }

  return arr;
};