/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2, result=[]) {
    if(list1 == null && list2 == null){
        return arrToLinkedList(result.sort((a,b) => a - b)); //result.sort()는 정확한 결과가 나오지 않았다.
    }
    const arr = [...result];
    if(list1 && list1.val != undefined){
        arr.push(list1.val)
    }
    if(list2 && list2.val != undefined){ //list2.val이 0인 경우도 거르기 때문에 undefined가 아닌 경우로 해야 한다.
        arr.push(list2.val)
    }
    return mergeTwoLists(list1?.next, list2?.next, arr)
};

var arrToLinkedList = function(arr, link) {
    if(arr.length == 0){
        return link || new ListNode().next;
    }

    link = new ListNode (arr.pop(), link)
    return arrToLinkedList(arr,link)
}
