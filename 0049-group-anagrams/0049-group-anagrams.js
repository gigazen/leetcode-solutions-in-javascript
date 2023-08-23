/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let oArr = [];
  for (let i = 0; i < strs.length; i++) {
    let newStr = strs[i].split("").sort().join("");
    oArr.push(newStr);
  }

  let countObj = {};
  for (let j = 0; j < oArr.length; j++) {
    if (!countObj[oArr[j]]) {
      countObj[oArr[j]] = [strs[j]];
    } else {
      countObj[oArr[j]].push(strs[j]);
    }
  }

  let outputArr = [];
  for (let key in countObj) {
    outputArr.push(countObj[key]);
  }

  return outputArr;
};