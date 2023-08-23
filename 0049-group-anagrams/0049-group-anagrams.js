/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const sortedStrsArr = strs.map((word) => word.split("").sort().join(""));

  let hash = {};
  for (let i = 0; i < strs.length; i++) {
    if (!hash[sortedStrsArr[i]]) {
      hash[sortedStrsArr[i]] = [strs[i]];
    } else {
      hash[sortedStrsArr[i]].push(strs[i]);
    }
  }

  return Object.values(hash);
};
