/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    if(s.length <= 1) return;
    let first = 0;
    let index = s.length;
    while(index>=0){
        [s[first], s[first+1]] = [s[first+1],s[first]];
        if(first>=index-2){
            index--;
            first = 0;
        }else{
            first++;
        }
    }
};
