var containsDuplicate = function(nums) {
  var hash={};
  for(var i=0; i<nums.length; i++){
    if(!hash[nums[i]]){
      hash[nums[i]] = 1;
    } else {
      hash[nums[i]]++;
    }
  }
  for(var key in hash){
    if(hash[key] >  1){
      return true;
    }
  }
  return true;
};