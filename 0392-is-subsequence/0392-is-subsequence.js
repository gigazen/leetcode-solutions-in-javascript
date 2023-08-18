/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    // Base case: if the s string is empty...
    if(s.length == 0)
        return true;
    // Initialize pointers for both strings
    let i = 0;
    let j = 0;
    // We can iterate until either of them becomes zero...
    while(i < s.length && j < t.length){
        // Compare characters, increment i pointer...
        if(s.charAt(i) == t.charAt(j)){
            i++;
        }j++;
        // If the pointer is equal to the size of s, the match is found...
        if(i == s.length)  return true;
    }
    return false;       // Otherwise return false...
};