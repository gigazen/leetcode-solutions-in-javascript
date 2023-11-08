/**
 * @param {number[][]} grid
 * @return {number}
 */
var gridGame = function(grid) {
    let top = grid[0].reduce((acc, num) => acc + num, 0);
    let bottom = 0;
    let res = Infinity;
    for(let i = 0; i < grid[0].length; i++) {
        top -= grid[0][i];
        res = Math.min(res, Math.max(top, bottom));
        bottom += grid[1][i];
    }
    return res;        
}