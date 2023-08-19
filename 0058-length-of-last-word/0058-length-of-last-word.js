/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    let trimmedString = s.trim();
    return trimmedString.length - trimmedString.lastIndexOf(" ") - 1;
};
