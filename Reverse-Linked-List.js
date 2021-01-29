/*
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
*/

// Reverse a Linked List
// Iteratively
let reverseList = function(head) {
  let prev = null, next = null;
  while (head) {
      next = head.next
      head.next = prev;
      prev = head;
      head = next;
  }
  return prev;
};

// Recursively
var reverseList = (head) => {
  if (!head || !head.next) return head;
  let current = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return current;
};
