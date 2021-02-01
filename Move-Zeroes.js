// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]

var moveZeroes = function(nums) {
  let len = nums.length;

  for (let i = 0; i < len; i++) {
    if (nums[i] == 0) {
      nums.splice(i, 1);
      nums.push(0);
      i--;
      len--;
    }
  }
};