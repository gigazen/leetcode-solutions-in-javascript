/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    mergeSort(nums, 0 , nums.length-1)
    return nums
};

const mergeSort = (array, left, right) => {
    if(left < right){
        const mid = Math.floor((left + right) / 2);
        mergeSort(array, left, mid);
        mergeSort(array, mid+1, right);
        merge(array, left, mid, right);
    }
};

const merge = (array, left, mid, right) => {
    const leftArr = [], rightArr = [];
    const M = mid - left + 1 , N = right - mid;

    for (let index = 0; index < M; index++)
        leftArr.push(array[left + index]);
    for (let index = 0; index < N; index++)
        rightArr.push(array[mid + 1 + index]);
  
    let i = 0, j = 0, k = left;

    while (i < M && j < N) {
        if (leftArr[i] <= rightArr[j])
            array[k++] = leftArr[i++];
        else 
            array[k++] = rightArr[j++];
    }

    while (i < M) array[k++] = leftArr[i++];
  
    while (j < N) array[k++] = rightArr[j++];

};