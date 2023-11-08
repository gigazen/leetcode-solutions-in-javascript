/**
 * @param {number[][]} grid
 * @return {number}
 */
var gridGame = function(grid) {
    let len = grid[0].length;
    let prefixTop = grid[0].slice();
    let prefixBottom = grid[1].slice();
    for (let i = 1; i < len; i++) {
        prefixTop[i] += prefixTop[i-1];
        prefixBottom[i] += prefixBottom[i-1];
    }
    let result = Infinity;
    for (let j = 0; j < len; j++) {
        let top = prefixTop[len - 1] - prefixTop[j];
        let bottom = j > 0 ? prefixBottom[j - 1] : 0;
		// From the current index, find the max points that Robot 2 can attain from either the top or bottom.
        let r2 = Math.max(top, bottom);
		// Keep track of the lowest max points value of all the indices visited.
        result = Math.min(result, r2);
    }
    return result;
}