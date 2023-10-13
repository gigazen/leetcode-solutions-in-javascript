/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    var map = new Map();
    var result = []
    for(let i=0; i<nums.length; i++){
        map.set(nums[i] ,  map.get(nums[i]) + 1 || 1);
    }
    let heap = new Heap();
    for(let i of map.keys()){
        heap.insert([i, map.get(i)])
    }
    for(let i=0; i<k; i++){
        result.push(heap.remove())
        
    }
    return result

};
class Heap {
    constructor(){
        this.data = [];
    }
    getParent(i){
        return Math.floor((i-1)/2)
    }
    left(i){
        return i*2 + 1
    }
    right(i){
        return i*2 + 2
    }
    swap(i, j){
        [this.data[i] , this.data[j] ] = [this.data[j] , this.data[i] ]
    }
    insert(obj){
       this.data[this.data.length] = obj;
        this.hepify()
    }
    
    // O(N)
    hepify(){
        let child = this.data.length - 1;
        let parent = this.getParent(child);
        while(this.data[parent] && this.data[parent][1] < this.data[child][1]){
            this.swap(parent , child);
            child = parent
            parent = this.getParent(child);
        }
    }
    
    remove(){
       let first = this.data[0];
        this.data[0] = this.data[this.data.length - 1];
        this.data.length--;
        this.poll();
        
        return first[0]
    }
    poll(){
        let index = 0;
        while(this.data[this.left(index)] !== undefined){
            let big;
            if(this.data[this.right(index)] == undefined || this.data[this.left(index)][1] > this.data[this.right(index)][1]){
                big = this.left(index)
            }else{
                big = this.right(index)
            }
            if(this.data[big][1] > this.data[index][1]){
                this.swap(big , index)
                index = big 
            }else{
                return;
            }
        }
    }
}