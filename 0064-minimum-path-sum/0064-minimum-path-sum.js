/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    const xlen = grid.length;
    const ylen = grid[0].length;
    const arr = grid.slice();
    
    for(let x=0; x<xlen; x++){
        for(let y=0; y<ylen; y++){
            if(x >= xlen || y >= ylen){
                return;
            }
            let val = Number.MAX_SAFE_INTEGER + 1;
            if(x-1 >= 0){
                val = Math.min(val, arr[x][y]+arr[x-1][y]);
            }
            if(y-1 >= 0){
                val = Math.min(val, arr[x][y]+arr[x][y-1]);
            }
            if(x-1 < 0 && y-1 < 0){
                val = arr[x][y];
            }

            arr[x][y] = val;
        }
    }
   
    return arr[xlen-1][ylen-1];
};