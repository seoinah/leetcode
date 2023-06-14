/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const map = new Map();
    for(let i=0; i<nums.length; i++){
        if(map.get(nums[i])){
            map.set(nums[i], map.get(nums[i])+1);
        }else{
            map.set(nums[i], 1);
        }
    }

    return [...map.entries()].sort((a,b) => a[1]-b[1])[0][0]
};


function singleNumber2(nums) {
	return nums.reduce((prev, curr) => prev ^ curr);
}
