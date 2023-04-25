/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    let resultArr = [...nums];
    
    for (let item of nums) {
        resultArr.push(item);
    }
    
    return resultArr;
};