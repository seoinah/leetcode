/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let len = s.length; 
    if(len==0 || len==1) return s
    let start;
    while(len > 0){
        start=0;
        while(start <= s.length - len){
            let substr= s.substr(start, len);
            if(substr.length == 0 || substr.length ==1 ) return substr;
            if(isPalindrome(substr)){
                return substr;
            }else{
                start++;
            }
        }
        len--;
    }
};

const isPalindrome = (s) => {
    for(let i=0; i<Math.floor(s.length/2); i++){
        if(s[i] != s[s.length -1 -i]){
            return false;
        }
    }
    return true;
}
