/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    if (nums === null || nums.length <= 1) {
        return [];
    }
    let n = nums.length;
    let left = new Array(n), right = new Array(n), res = new Array(n);
    for (let i = 0; i < n; i++) {
        left[i] = i > 0 ? nums[i] * left[i-1] : nums[i];
    }
    for (let i = n-1; i >= 0; i--) {
        right[i] = i < n-1 ? nums[i] * right[i+1] : nums[i];
    }
    for (let i = 1; i < n-1; i++) {
        res[i] = left[i-1] * right[i+1];
    }
    res[0] = right[1];
    res[n-1] = left[n-2];
    return res;
    // T.C: O(N)
    // S.C: O(N), even though we assume that the output array is not counted as extra space,
    // we use two extra arrays of length n
};