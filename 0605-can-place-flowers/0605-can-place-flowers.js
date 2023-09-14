/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(arr, n) {
    if(n===0)return true;
    for(let i=0; i<arr.length; i++){
        if( !arr[i-1] && !arr[i] && !arr[i+1] ){
            arr[i] = 1
           n--;
        }
        if(n===0)return true
    }
    return false
};
