/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (!s || !t) return false;
    if (s.length !== t.length) return false;
    
    const map = new Map();
    
    for (let char of s) {
        if (!map.has(char)) {
            map.set(char, 1);
        } else {
            map.set(char, map.get(char) + 1);
        }
    }
    
    for (let char of t) {
        if (!map.has(char)) return false;
        if (map.get(char) === 1) {
            map.delete(char);
        } else {
            map.set(char, map.get(char) - 1);
        }
    }
    
    return map.size === 0;
};