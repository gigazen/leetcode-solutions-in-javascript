/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
    let ans = [];
    
    for (let i = 0; i < 2; i++) {
        for (let item of nums) {
            ans.push(item);
        }
    }
    
    return ans;
};
