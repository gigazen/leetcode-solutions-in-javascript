/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
  let seenSet = new Set();
  let resultSet = new Set();

  for (let i = 0, j = 9; j < s.length; j++) {
    let sequence = s.slice(i, j + 1);
    if (seenSet.has(sequence)) resultSet.add(sequence);
    seenSet.add(sequence);
    i++;
  }

  return [...resultSet];
};