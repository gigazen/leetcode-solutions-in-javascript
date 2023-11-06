/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var interchangeableRectangles = function (rectangles) {
  let map = new Map();

  for (let i = 0; i < rectangles.length; i++) {
    let ratio = rectangles[i][0] / rectangles[i][1];
    map.set(ratio, (map.get(ratio) || 0) + 1);
  }

  let sum = 0;
  for (let [key, count] of map) {
    count--;
    sum += (count * (count + 1)) / 2;
  }

  return sum;
};