/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// Using combination of Sorting and HashMap
var groupAnagrams = function (strs) {
  let map = new Map();

  for (let str of strs) {
    let sortedStr = str.split("").sort().join("");
    // ["aet","aet","ant","aet","ant","abt"]

    if (!map.has(sortedStr)) {
      map.set(sortedStr, [str]);
    } else {
      map.get(sortedStr).push(str);
    }
    // Map(3) {"aet": ["eat", "tea", "ate"], "ant": ["tan", "nat"], "abt": ["bat"]}
  }

  return Array.from(map.values());
};

