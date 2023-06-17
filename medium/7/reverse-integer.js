/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const num = x < 0 ? x.toString().substring(1) : x.toString();
    const bitArray = Number(num.split("").reverse().join(""));
     if(outOfRange(x<0? (bitArray * -1) : bitArray)){
        return 0;
    }
    const bitToNum = x < 0 ? ~bitArray+1 : bitArray;
    return bitToNum
};

const outOfRange = (num) => {
    if((num > Math.pow(2,31)-1) || (num < Math.pow(2,31) * -1)){
      return true;
    }
    return false;
}
