/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  if(n.toString().length==1) return n==1 || n==7;
  const result = happyNum(n.toString().split(''));
  return  result == 1 || result == 7;  
};

const happyNum = (num) => {
    let add = num.reduce((acc,cur) =>  Number(acc) + Math.pow(cur, 2),0)
    if(add < 10){
        return add;
    }
    return happyNum(add.toString().split(''))
}
