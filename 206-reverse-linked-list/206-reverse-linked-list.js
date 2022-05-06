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

//[1,2,3]

var reverseList = function(head) {
    if(!head) return head; //필수
    
    let node = head; //1
    let numNext = node.next; //2
    
    while(numNext){ //2
       let numNext2 = numNext.next; //3
       
       numNext.next = node; //[3] = 1
        
       node = numNext; //[1] = 2
        
       numNext = numNext2; //[2] = 3
        
    }
    
    head.next = null;
    head = node;
    // head == 1 , node = [2,3,1]
    
    return node;
};