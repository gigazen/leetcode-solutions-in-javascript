/**
 * @param {number[][]} wall
 * @return {number}
 */
var leastBricks = function (wall) {
  let freqMap = new Map();
  let maxFreq = 0;

  for (let row of wall) {
    let rngSumInRow = 0;

    for (let i = 0; i < row.length - 1; i++) {
      rngSumInRow += row[i];
      freqMap.set(rngSumInRow, (freqMap.get(rngSumInRow) || 0) + 1);
      maxFreq = Math.max(maxFreq, freqMap.get(rngSumInRow));
    }
  }

  return wall.length - maxFreq;
};