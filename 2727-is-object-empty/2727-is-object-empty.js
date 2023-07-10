/**
 * @param {Object | Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    return Array.from(Object.keys(obj)).length <= 0
};