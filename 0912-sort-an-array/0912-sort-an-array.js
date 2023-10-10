/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    if(nums.length <= 1) return nums
    
    let midIdx = Math.floor(nums.length / 2)
    let leftArr = sortArray(nums.slice(0, midIdx))
    let rightArr = sortArray(nums.slice(midIdx))
    
    return mergeArr(leftArr, rightArr)
};

var mergeArr = function(arr1, arr2) {
    let results = []
    let i = 0
    let j = 0
    
    while(i <  arr1.length && j < arr2.length){
        if(arr2[j] > arr1[i]){
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j])
            j++;
        }
    }
    
    while(i < arr1.length) {
        results.push(arr1[i])
        i++;
    }
    
    while(j < arr2.length) {
        results.push(arr2[j])
        j++;
    }
    
     return results;
}