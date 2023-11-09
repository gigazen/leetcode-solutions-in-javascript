/**
 * @param {number[][]} grid
 * @return {number}
 */
var gridGame = function (grid) {
  let topRightPfxSum = 0;
  for (let i = 0; i < grid[0].length; i++) {
    topRightPfxSum += grid[0][i];
  }
  let botLeftPfxSum = 0;
  let lowestMaxPtOfRobot2 = Infinity;

  for (let i = 0; i < grid[0].length; i++) {
    topRightPfxSum -= grid[0][i];
    // From the current i index, find the max points that Robot2 can collect from either the topRightPfxSum or botLeftPfxSum
    let maxPointOfRobot2 = Math.max(topRightPfxSum, botLeftPfxSum);
    // Keep track of the lowest max points value of all the indices visited because Robot1 will minimize Robot2's max points
    lowestMaxPtOfRobot2 = Math.min(lowestMaxPtOfRobot2, maxPointOfRobot2);
    botLeftPfxSum += grid[1][i];
  }

  return lowestMaxPtOfRobot2;
};