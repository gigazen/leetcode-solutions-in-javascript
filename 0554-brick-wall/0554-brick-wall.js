/**
 * @param {number[][]} wall
 * @return {number}
 */
var leastBricks = function (wall) {
  let freqMap = new Map();
  let maxFreq = 0;

  for (let row of wall) {
    let runningSumInRow = 0;

    for (let i = 0; i < row.length - 1; i++) {
      runningSumInRow += row[i];
      freqMap.set(runningSumInRow, (freqMap.get(runningSumInRow) || 0) + 1);
      maxFreq = Math.max(maxFreq, freqMap.get(runningSumInRow));
    }
  }

  return wall.length - maxFreq;
};