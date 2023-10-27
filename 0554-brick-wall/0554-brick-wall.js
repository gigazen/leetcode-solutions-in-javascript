/**
 * @param {number[][]} wall
 * @return {number}
 */
var leastBricks = function(wall) {
    const counts = {};
    let max = 0;
    for (let row of wall) {
        let sum = 0;
        for (let i = 0; i < row.length - 1; i++) {
            sum += row[i];
            counts[sum] = (counts[sum] || 0) + 1;
            max = Math.max(max, counts[sum]);
        }
    }
    return wall.length - max;
};