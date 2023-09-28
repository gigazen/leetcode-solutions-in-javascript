/**
 * @param {number[]} nums
 */
class NumArray {
  constructor(nums) {
    this.prefixSumArr = nums;

    // create an array whose elements are running sum of all previous elements
    for (let i = 1; i < nums.length; i++) {
      this.prefixSumArr[i] = this.prefixSumArr[i - 1] + nums[i];
    }
  }

    // calculate the sum of elements from left to right index, inclusive
    // if left index is <= 0 then return sum from beginning to right index of prefix array but if left index is > 0 then return sum from left index to right index of prefix array, have to eliminate sum upto left - 1 index 
  sumRange(left, right) {
    if (left <= 0) {
      return this.prefixSumArr[right];
    } else {
      return this.prefixSumArr[right] - this.prefixSumArr[left - 1];
    }
  }
}