/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    const result = [];
    const word2Arr = word2.split("");
    word1.split("").forEach((v,index) => {
        result.push(v);
        result.push(word2Arr[index]);
    })

    return [...result, ...word2Arr.slice(word1.length)].join('');
};
