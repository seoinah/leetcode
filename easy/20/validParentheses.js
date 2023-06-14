/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const bracket = [];
    for(let i=0; i<s.length; i++){
        const v = s[i];
        if(v == ')' || v == ']' || v == '}') {
            if(i>0 && bracket[bracket.length-1] == bracketType[v]){
                bracket.pop();
            }else{
                return false;
            }
        }else{
            bracket.push(v);
        }
    }
  
    return bracket.length == 0
};

const bracketType = {
    ")" : "(",
    "}" : "{",
    "]" : "["
}
