/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {

const quickSortHelper = (start, end) => {
  
    if(start >= end) return
    let left = start 
    let right = end
    const pivot = nums[Math.floor((start+end) / 2)]
    
    while(left <= right) {
        while(left <= right && pivot > nums[left]){
            left++
        }
        while(left <= right && pivot < nums[right]){
            right--
        }
        if(left <= right){
            let temp = nums[left]
            nums[left] = nums[right]
            nums[right] = temp
            left++
            right--
        }
    }
    quickSortHelper(start, right)
    quickSortHelper(left, end)
 }
 
    if(nums.length === 1) return nums;

    quickSortHelper(0, nums.length-1)
    return nums
}