/*
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
*/

// Deletes the node that is input, the input is NOT the head
var deleteNode = function(node) {
  node.val = node.next.val;
  node.next = node.next.next;
};