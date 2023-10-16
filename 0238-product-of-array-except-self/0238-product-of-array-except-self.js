/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let result = Array(nums.length).fill(1)

    let prodOfNumsBehindLeftPointer = 1
    let prodOfNumsBehindRigthtPointer = 1
    
    for(let l = 0, r = nums.length - 1; l < nums.length; l++, r--){
        result[l] *= prodOfNumsBehindLeftPointer
        result[r] *= prodOfNumsBehindRigthtPointer

        prodOfNumsBehindLeftPointer *= nums[l]
        prodOfNumsBehindRigthtPointer *= nums[r]
    }

    return result
};