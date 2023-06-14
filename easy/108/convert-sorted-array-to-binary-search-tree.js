/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {

    return arrToTree(nums, 0, nums.length-1);
};

const arrToTree = (arr, start, end) => {
    if(start > end){
        return null;
    }
    const mid = Math.floor((start+end)/2);
    return new TreeNode(arr[mid], arrToTree(arr, start, mid-1), arrToTree(arr, mid+1, end));
}
