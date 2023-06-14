/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if(numRows==1) return [[1]];
    const result = [[1],[1,1]];

    for(let i=2; i<numRows; i++){
        const row = [1];
        for(let j=1; j<i; j++){
            row[j] = result[i-1][j-1] + result[i-1][j];
        }
        row[i] = 1;
        result.push(row);
    }
    return result;
};
