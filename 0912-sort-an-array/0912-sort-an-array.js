/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    if (nums.length < 2) return nums
    quickSort(nums, 0, nums.length-1)
    return nums
}

var quickSort = (nums, start, end) => {
    if (start >= end) return
    let left = start, right=end
    let pivot = nums[Math.floor((start+end)/2)]
    while (left <= right) {
        while (nums[left] < pivot) left++
        while (nums[right] > pivot) right--
        if (left <= right) {
            let temp = nums[left]
            nums[left] = nums[right]
            nums[right] = temp
            left++
            right--
        }
    }
    quickSort(nums,start,right)
    quickSort(nums,left,end)
}