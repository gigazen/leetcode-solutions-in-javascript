/**
 * @param {number[][]} grid
 * @return {number}
 */
// 88%, 30%
var gridGame = function (grid) {
  let noOfCols = grid[0].length;
  let topRowPfxSum = grid[0].slice();
  let botRowPfxSum = grid[1].slice();

  for (let i = 1; i < noOfCols; i++) {
    topRowPfxSum[i] += topRowPfxSum[i - 1];
    botRowPfxSum[i] += botRowPfxSum[i - 1];
  }

  let lowestMaxPtOfRobot2 = Infinity;
  for (let i = 0; i < noOfCols; i++) {
    let topRightPfxSum = topRowPfxSum[noOfCols - 1] - topRowPfxSum[i];
    let botLeftPfxSum = i > 0 ? botRowPfxSum[i - 1] : 0;
    // From the current index, find the max points that Robot2 can collect from either the topRightPfxSum or botLeftPfxSum
    let maxPointOfRobot2 = Math.max(topRightPfxSum, botLeftPfxSum);
    // Keep track of the lowest max points value of all the indices visited because Robot1 will minimize Robot2's max points
    lowestMaxPtOfRobot2 = Math.min(lowestMaxPtOfRobot2, maxPointOfRobot2);
  }
  return lowestMaxPtOfRobot2;
};
