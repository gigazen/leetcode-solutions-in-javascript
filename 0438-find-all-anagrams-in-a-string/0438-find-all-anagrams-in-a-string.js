/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    if(s.length < p.length)return [];
    
    let ans = []
    let len = p.length;
    let sArr = new Array(26).fill(0);
    let pArr = new Array(26).fill(0);
    for(let i=0; i<len; i++){
        let charCode = p[i].charCodeAt(i);
        sArr[s[i].charCodeAt(0) -97]++;
        pArr[p[i].charCodeAt(0) -97]++;
    }
    if(isAnaGram(sArr, pArr))ans.push(0);
    
    
    for(let i=1; i<= s.length-p.length; i++) {
        
        sArr[s[i-1].charCodeAt(0)-97]--;
        sArr[s[i+len-1].charCodeAt(0) -97]++;
        
        if(isAnaGram(sArr, pArr))ans.push(i)
        
    }
    return ans;
    
    function isAnaGram(arr1, arr2){
        for(let i=0; i<=25; i++){
            if(arr1[i] !== arr2[i])return false
        }
        return true
    }
};