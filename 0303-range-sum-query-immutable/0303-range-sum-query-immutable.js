/**
 * @param {number[]} nums
 */
class NumArray {
  constructor(nums) {
    this.runningSumElArr = nums;

    // create an array whose elements are running sum of all previous elements, start loop from index 1 as nothing to add before index 0, put the big calculation inside constructor for better performance
    for (let i = 1; i < nums.length; i++) {
      this.runningSumElArr[i] += this.runningSumElArr[i - 1];
    }
  }

  // method to calculate the sum of elements from left to right index, inclusive
  // if left index is -ve or 0 then return sum from beginning to given right index of runningSumElArr, and if left index is +ve then return sum from that left index to the given right index of runningSumElArr
  // for that have to subtract running sum upto left - 1 index from right index running sum
  sumRange(left, right) {
    if (left <= 0) {
      return this.runningSumElArr[right];
    } else {
      return this.runningSumElArr[right] - this.runningSumElArr[left - 1];
    }
  }
}