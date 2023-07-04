/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const result = [];
    
    if(digits.length === 0){
        return result;
    }
    
    const digitArr = digits.split('');
    dfs(digitArr, 0, '', result)
    
    return result;
};

const dfs = (arr, depth, str, result) => {
    if(arr.length === depth){
        return result.push(str);
    }
    
    const char = phoneNum[arr[depth]];
    char.split('').forEach(v => dfs(arr, depth+1, str+v, result))
}

const phoneNum = {
    2 : 'abc',
    3 : 'def',
    4 : 'ghi',
    5 : 'jkl',
    6 : 'mno',
    7 : 'pqrs',
    8 : 'tuv',
    9 : 'wxyz'
}