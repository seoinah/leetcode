/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    const reverseBits = n.toString(2).split('').reverse();
    for(let i=reverseBits.length; i<32; i++){
        reverseBits[i] = 0;
    }
    return parseInt(reverseBits.join(''),2)
};
