/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {
  let hashMap = { b: 0, a: 0, l: 0, o: 0, n: 0 };

  for (let char of text) {
    hashMap[char]++;
  }

  return Math.floor(
    Math.min(hashMap.b, hashMap.a, hashMap.l / 2, hashMap.o / 2, hashMap.n)
  );
};