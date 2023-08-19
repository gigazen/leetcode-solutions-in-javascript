/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let newStr = s.trim();
    
    let count = 0;
    for (let i = newStr.length - 1; i >= 0; i--) {
        if (newStr[i] !== " ") {
            count++;
        } else {
            break;
        }
    }
    
    return count;
};