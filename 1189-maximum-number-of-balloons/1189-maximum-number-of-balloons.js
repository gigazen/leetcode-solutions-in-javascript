/**
 * @param {string} text
 * @return {number}
 */
const maxNumberOfBalloons = (text) => {
  let obj = {},
    balloonCount = 0;

  for (let char of text) {
    if (obj[char] === undefined) {
      obj[char] = 1;
    } else {
      obj[char]++;
    }
  }

  while (
    obj["b"] > 0 &&
    obj["a"] > 0 &&
    obj["l"] > 1 &&
    obj["o"] > 1 &&
    obj["n"] > 0
  ) {
    balloonCount++;
    obj["b"]--;
    obj["a"]--;
    obj["l"] -= 2;
    obj["o"] -= 2;
    obj["n"]--;
  }

  return balloonCount;
};