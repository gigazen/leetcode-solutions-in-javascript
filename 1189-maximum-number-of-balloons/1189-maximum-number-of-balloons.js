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

  return Math.floor(
    Math.min(
      map.get("b"),
      map.get("a"),
      map.get("l") / 2,
      map.get("o") / 2,
      map.get("n")
    )
  );
};