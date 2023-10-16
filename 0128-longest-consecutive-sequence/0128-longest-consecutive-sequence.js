/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(A) {
    const M = {}; // {number: length}
    let ret = 0;
    for (let a of A) {
        if (M[a]) continue; // duplicates
        const left = M[a - 1] || 0;
        const right = M[a + 1] || 0;
        const length = left + right + 1;
        ret = Math.max(ret, length);
        M[a] = length;
        M[a - left] = length;
        M[a + right] = length;
    }
    return ret;
};