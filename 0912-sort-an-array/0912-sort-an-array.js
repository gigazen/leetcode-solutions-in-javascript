/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    if (nums.length < 2) return nums
    let mid = Math.floor(nums.length/2)
    let left = nums.slice(0, mid)
    let right = nums.slice(mid)
    return merge(sortArray(left), sortArray(right))
};

var merge = (arr1, arr2) => {
    let arr = []
    while (arr1.length && arr2.length) {
        if (arr1[0] <= arr2[0]) arr.push(arr1.shift())
        else arr.push(arr2.shift())
    }
    return [...arr, ...arr1, ...arr2]
}