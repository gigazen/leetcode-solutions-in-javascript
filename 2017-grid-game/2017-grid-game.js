/**
 * @param {number[][]} grid
 * @return {number}
 */
var gridGame = function(grid) {
    const n = grid[0].length;
    
    let topTotSum = grid[0].reduce((acc, num) => acc + num, 0);
    let botTotSum = grid[1].reduce((acc, num) => acc + num, 0);
    
    let leftAccBotSum = 0;
    
    let bestSum = Math.min(topTotSum, botTotSum);
    
    for (let j = 0; j < n; ++j) {
        const topNum = grid[0][j];
        const botNum = grid[1][j];
        
        topTotSum -= topNum;
        
        const maxSum = Math.max(topTotSum, leftAccBotSum);
        
        bestSum = Math.min(bestSum, maxSum);
        
        leftAccBotSum += botNum;
    }
    
    return bestSum;
};