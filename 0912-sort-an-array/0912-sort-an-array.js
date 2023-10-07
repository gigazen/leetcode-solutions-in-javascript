/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    
    function quickSortHelper(nums, start, end) {
        if (start >= end) return nums
    
        var pivotValue = nums[start]
        var smaller = start
        for (var i = start + 1; i <= end; i++) {
            var bigger = i
            if (nums[bigger] < pivotValue) {
                smaller++
                var smallerValue = nums[bigger]
                nums[bigger] = nums[smaller]
                nums[smaller] = smallerValue
            }
        }
        var smallerCache = nums[smaller]
        nums[smaller] = nums[start]
        nums[start] = smallerCache
        
        quickSortHelper(nums, start, smaller - 1)
        quickSortHelper(nums, smaller + 1, end)
        return nums
    }
    
    return quickSortHelper(nums, 0, nums.length - 1)
};