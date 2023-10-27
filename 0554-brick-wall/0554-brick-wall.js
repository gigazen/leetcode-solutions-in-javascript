/**
 * @param {number[][]} wall
 * @return {number}
 */
var leastBricks = function (wall) {
  let freqMap = new Map();
  let maxFreq = 0;

  for (let row of wall) {
    let runningSumInRow = row[0];
    let isFirstBrick = true;

    for (let brick of row) {
      if (isFirstBrick) {
        isFirstBrick = false;
        continue;
      }
      freqMap.set(runningSumInRow, (freqMap.get(runningSumInRow) || 0) + 1);
      runningSumInRow += brick;
    }
  }

  for (let [runningSumInRow, freq] of freqMap) {
    if (freq > maxFreq) maxFreq = freq;
  }

  return wall.length - maxFreq;
};