/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = (s, t, index = 0) => {

    if (s.length > t.length) return false;

    for (let i = 0; i < t.length; i++) {
        if (s[index] == t[i]) {
            index++;
            if (index == s.length) break;
        }
    }
    return s.length === index;
};