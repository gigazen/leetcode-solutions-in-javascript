/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
  const sequenceMap = {'A': 0, 'C': 1, 'G': 2, 'T': 3}
  const base = 4;
  const hashMap = {};
  let rollingHash = 0;
  for(let i = 0, power = 9; i < 10; i++, power--) {
    rollingHash += base ** power * sequenceMap[s[i]];
  }
  hashMap[rollingHash] = s.slice(0, 10);
  let answer = new Set();
  for(let i = 10; i < s.length; i++) {
    let nextRollingHash = base * (rollingHash - base ** 9 * sequenceMap[s[i - 10]]) + sequenceMap[s[i]];
    if(nextRollingHash in hashMap) {
      answer.add(hashMap[nextRollingHash])
    } else {
      hashMap[nextRollingHash] = s.slice(i - 9, i + 1);
    }
    rollingHash = nextRollingHash;
  }
  return [...answer.values()];
};