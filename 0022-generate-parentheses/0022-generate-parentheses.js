/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const result = []
    
    const go = (left, right, str) => {
        if(str.length === n*2) {
            result.push(str);
            return;
        }
        
        if(left<n) go(left+1, right, str+"(");
        if(right<n && left>right) go(left, right+1, str+")");
    }
    
    go(0, 0, "");
    
    return result
};