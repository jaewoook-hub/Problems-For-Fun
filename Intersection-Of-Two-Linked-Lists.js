/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

var getIntersectionNode = function(headA, headB) {
  if(!headA || !headB) return null;
  var map = new Set();
  while(headA !== null){
      map.add(headA);
      headA = headA.next;
  }
  while(headB !== null){
      if(map.has(headB)){
          return headB;
      }
      headB = headB.next;
  }
  return null;
};