/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let sortedS = [...s].sort().join("");
    let sortedT = [...t].sort().join("");
    
    if (sortedS === sortedT) {
        return true;
    }
    
    return false;
};

