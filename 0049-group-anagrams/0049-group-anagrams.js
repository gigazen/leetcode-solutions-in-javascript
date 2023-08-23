/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// Using combination of Sorting and HashMap
var groupAnagrams = function (strs) {
  let obj = {};

  for (let str of strs) {
    let sortedStr = str.split("").sort().join("");

    if (!obj[sortedStr]) {
      obj[sortedStr] = [];
    }
    obj[sortedStr].push(str);
  }

  return Object.values(obj);
};
