/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (str, pat) {
  let [strLength, patLength, first, second] = [str.length, pat.length, 0, 0];

  while (first < strLength && second < patLength) {
    // match
    if (str[first] === pat[second]) {
      first++;
      second++;
    } else {
      // mismatch and pre at 0
      if (second === 0) {
        first++;
      } else {
        // mismatch and pre not at 0
        let lpsArr = LPSArrForPattern(pat);
        second = lpsArr[second - 1];
      }
    }
  }

  if (second === patLength) return first - second;
  return -1;

  function LPSArrForPattern(pat) {
    let [pre, suf] = [0, 1];
    if (patLength === 0) return 0;

    let lpsArr = new Array(patLength).fill(0);

    while (suf < patLength) {
      // match
      if (pat[pre] === pat[suf]) {
        lpsArr[suf] = pre + 1;
        pre++;
        suf++;
      } else {
        // mismatch and pre at 0
        if (pre === 0) {
          lpsArr[suf] = 0;
          suf++;
        } else {
          // mismatch and pre not at 0
          pre = lpsArr[pre - 1];
        }
      }
    }

    return lpsArr;
  }
};