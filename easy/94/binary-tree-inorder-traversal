/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 
var inorderTraversal = function(root) {
    const result = [];
    pushArr(root, result);
    return result;
};

var pushArr = function (node, arr) {
    if(node == null){
        return;
    }
    if(node.left){
        pushArr(node.left, arr);
    }
    arr.push(node.val);
    if(node.right){
        pushArr(node.right, arr);
    }
}
