/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

var isPalindrome = function(head) {
  if(!head) return true;
  let current = head;
  let palindromeArray = [];
  while(current !== null){
      palindromeArray.push(current.val);
      current = current.next;
  }
  for(var i=0, r=palindromeArray.length-1; i<r; i++, r--){
      if(palindromeArray[i] !== palindromeArray[r]){
          return false;
      }
  }
  return true;
};