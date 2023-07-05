
/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    const map = new Map();
  
    for(const one of arr1) map.set(one.id, one)
    
    for(const two of arr2){
        if(map.get(two.id)){
            map.set(two.id, {...map.get(two.id), ...two});
        }else{
            map.set(two.id, two);
        }
    }

   return Array.from(map.values()).sort((a,b) => a.id - b.id);
};

