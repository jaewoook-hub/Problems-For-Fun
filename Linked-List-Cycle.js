/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

var hasCycle = function(head) {
  if(!head || !head.next) return false;
  const nodes = new Set();
  let current = head;
  while(current !== null){
      if(nodes.has(current)) return true;
      nodes.add(current);
      current = current.next;
  }
  return false;
};