/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// Using combination of Sorting and HashMap
var groupAnagrams = function (strs) {
  let obj = {};

  for (let str of strs) {
    let sortedStr = str.split("").sort().join("");
    // ["aet","aet","ant","aet","ant","abt"]

    obj[sortedStr] ? obj[sortedStr].push(str) : (obj[sortedStr] = [str]);
    // {"aet": ["eat", "tea", "ate"], "ant": ["tan", "nat"], "abt": ["bat"]}
  }

  return Object.values(obj);
};
