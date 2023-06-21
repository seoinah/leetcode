/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    let regex= /[aeiou]/
    let max = 0;
    let count = 0;
    for(let i = 0; i<k; i++){
        if(regex.test(s[i])) max++
    }

    if(max==k) return max;

    count = max;
    for(let i=1; i<=s.length-k; i++){
        if(regex.test(s[i-1])) count--;
        if(regex.test(s[i+k-1])) count++;

        if(count === k) return count;
        max = Math.max(max, count);
    }
    
    return max;
};
