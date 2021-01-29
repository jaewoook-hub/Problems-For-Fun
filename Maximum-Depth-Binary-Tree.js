/*
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
*/

var maxDepth = function(root) {
  var depth = DFS(root);
  return depth;
}

var DFS = function(root) {
  if(!root){ return null; }
  var left = DFS(root.left) + 1;
  var right = DFS(root.right) + 1;
  return Math.max(left, right);
}