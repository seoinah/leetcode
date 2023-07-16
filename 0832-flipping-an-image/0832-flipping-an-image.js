/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    let arr = image;
    for(let i=0; i<arr.length; i++){
        arr[i] = arr[i].reverse();
        for(let j=0; j<arr[i].length; j++){
            arr[i][j]= arr[i][j]===0 ? 1 : 0;
        }
    }
    return arr
};