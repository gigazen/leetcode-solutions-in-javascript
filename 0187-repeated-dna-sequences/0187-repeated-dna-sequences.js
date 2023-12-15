/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    if (s.length < 10) {
        return [];
    }
    let hashSet = new Set(), hash = 0, windowSize = 10, base = 4;
    let decoded = {'A': 1, 'C': 2, 'G': 3, 'T': 4};
    // process the first window separately
    for (let i = 0; i < 10; i++) {
        hash += Math.pow(base, windowSize-i-1) * decoded[s[i]];
    }
    hashSet.add(hash);
    let res = new Set();
    for (let i = 10; i < s.length; i++) {
        // subtract the left-most bit
        hash -= Math.pow(base, windowSize-1) * decoded[s[i-windowSize]];
        hash *= base;
        hash += decoded[s[i]];
        if (hashSet.has(hash)) {
            res.add(s.substring(i+1-windowSize, i+1));
        } else {
            hashSet.add(hash);
        }
    }
    return Array.from(res);
    // T.C: O(K*(N-K+1)) where K = 10 in the worst case 
    // but average time complexity will be O(N-K+1) which is much better
    // S.C: O(K*(N-K+1))
}