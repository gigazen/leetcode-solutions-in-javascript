/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
  let map = new Map();
  let resultArr = [];

  for (let i = 0, j = 9; j < s.length; j++) {
    let sequence = s.slice(i, j + 1);
    map.set(sequence, 1 + (map.get(sequence) || 0));
    i++;
  }

  for (let [key, value] of map.entries()) {
    if (value > 1) resultArr.push(key);
  }

  return resultArr;
};