/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  // begin with any arbitrary candidate and have a counter for the majority candidate
  let candidate = null;
  let count = 0;

  for (let currEl of nums) {
    if (count == 0) {
      candidate = currEl;
      count = 1;
    } else if (currEl === candidate) {
      count++;
    } else {
      // cancel out each occurence of an element if we encounter with a different element
      count--;
    }
  }

  // if an element exists which appears more than n/2 times then that element will be the final candidate
  return candidate;
};