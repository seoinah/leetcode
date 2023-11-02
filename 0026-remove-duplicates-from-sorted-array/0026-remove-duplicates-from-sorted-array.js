/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let duplicateIndex = 0;
    for (let i = 1; i < nums.length; i++) 
        if(nums[i] != nums[duplicateIndex]) nums[++duplicateIndex] = nums[i];
    return duplicateIndex + 1;
};