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
    
    let node = head; //1,2
    let numNext = node.next; //2,3
    
    while(numNext){ //2,3
       let numNext2 = numNext.next; //3,null
       
       numNext.next = node; //[3] = 1, [null] = 2
        
       node = numNext; //[1] = 2, [2] = 3
        
       numNext = numNext2; //[2] = 3, [3] = null
        
    }
    
    head.next = null;
    head = node;
    // head == 1 , node = [2,3,1]
    //head == 2, node = [3,2,1] // ?
    return node;
};