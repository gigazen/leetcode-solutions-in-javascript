/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    var product = 1;
    var counter = false
    for(let i of nums){
        if(i !== 0 ){
            product *= i
        }else{
             counter++
        }
        if(counter > 1){
            product = 0;
            break;
        }
    }
    
    for(let i=0; i<nums.length; i++){
        if(counter == 1 ){
            nums[i] = (nums[i] == 0) ? product :  0;
        }else{
            nums[i] = (nums[i] === 0) ? 0: product / nums[i]
        }
    }
    return nums
};