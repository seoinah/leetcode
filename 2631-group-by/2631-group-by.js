/**
 * @param {Function} fn
 * @return {Array}
 */
Array.prototype.groupBy = function(fn) {
    const map = {};
    this.forEach((v,index) => {
        const result = fn(v, index);
        if(!map[result]){
            map[result] = []
        }
        map[result].push(v)
    })
     
    return map;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */