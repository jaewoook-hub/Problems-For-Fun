// Example 1:
// Input: ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

// Example 2:
// Input: ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]

// O(1) Space Complexity
var reverseString = function(s) {
  for(let i=0, j=s.length-1; i<j; i++, j--){
      const x=s[i];
      s[i]=s[j];
      s[j]=x;
  }
};