/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    if(nums.length < 2) return nums
    let mid = Math.floor(nums.length/2);
    let left = nums.slice(0, mid);
    let right = nums.slice(mid);
    return merge(sortArray(left), sortArray(right));
};

var merge = function(left, right) {
    let sortedArray = [];
    while(left.length && right.length){
        if(left[0] <= right[0]){
            sortedArray.push(left.shift())
        }else {
            sortedArray.push(right.shift())
        }
    }

    return [...sortedArray, ...left, ...right]
}