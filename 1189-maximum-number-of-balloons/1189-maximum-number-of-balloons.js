/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {
  let map = new Map([
    ["b", 0],
    ["a", 0],
    ["l", 0],
    ["o", 0],
    ["n", 0],
  ]);

  for (let char of text) {
    if (map.get(char) !== undefined) {
      map.set(char, map.get(char) + 1);
    }
  }

  let arr = [];
  for (let [key, value] of map.entries()) {
    if (key === "l" || key === "o") {
      arr.push(Math.floor(value / 2));
    } else {
      arr.push(value);
    }
  }

  return Math.min(...arr);
};