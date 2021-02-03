var missingNumber = function(nums) {
  var length = nums.length;
  var compare = nums.sort(function(a, b) {
  return a - b;
});
  for(var i=0; i<=length; i++){ //0, 1, 2
    if(i !== compare[i]){
      return i;
    }
  }
};