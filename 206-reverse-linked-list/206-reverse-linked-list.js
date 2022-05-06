/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var reverseList = function(head) {
    if(!head) return head;
    
    let node = head; //1
    let numNext = node.next;
    
    while(numNext){
       let numNext2 = numNext.next; // null
       
       // node = numNext; //2 
       numNext.next = node; //1
        
       node = numNext;
        
       numNext = numNext2;
        
    }
    
    head.next = null;
    head = node;
    
    return node;
};