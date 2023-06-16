/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let curr = head;
    const arr=[];
    while(curr != null){
        arr.push(curr.val);
        curr = curr.next
    }
    
    for(let i=0; i<Math.floor(arr.length/2); i++){
        if(arr[i] !== arr[arr.length-(i+1)]){
            return false;
        }
    }
    return true;
};
