/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let rset = []
    let cset = []
    let bset = []
    for(i = 0;i < 9;i++ ){
        rset[i] = new Set()
        cset[i] = new Set()
        bset[i] = new Set()
    }
    for(i = 0; i< 9 ; i++){
        for(j = 0;j < 9; j++){
            
            let f = board[i][j]
            
            if(f == '.') continue
            
            if(rset[i].has(f)) return false
            else rset[i].add(f)
            
            if(cset[j].has(f)) return false
            else cset[j].add(f)

            let x = Math.floor(i/3) * 3 + Math.floor(j/3)
            if(bset[x].has(f)) return false
            else bset[x].add(f)           
        }
    }
    return true
};