/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if(s.trim().length==0) return true;
    const str = s.split('').filter(v => /[0-9a-zA-Z]/g.test(v));
    const mid = Math.floor(str.length/2);
   
    return str.slice(0, mid).join('').toLowerCase() == str.slice(str.length%2 != 0 ? mid+1 : mid).reverse().join('').toLowerCase();
};
