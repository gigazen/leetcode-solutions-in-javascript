/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    if (nums === null || nums.length <= 1) {
        return [];
    }
    let productFromLeft = 1, productFromRight = 1;
    let res = new Array(nums.length);
    for (let i = 0; i < nums.length; i++) {
        res[i] = productFromLeft;
        productFromLeft *= nums[i];
    }
    for (let i = nums.length-1; i >= 0; i--) {
        res[i] *= productFromRight;
        productFromRight *= nums[i];
    }
    return res;
    // T.C: O(N)
    // S.C: O(1), assuming that we do not count the output array as extra space
}