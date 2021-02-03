var firstUniqChar = function(s) {
  var search = {};
  var onesArray = [];

  for(var i=0; i<s.length; i++){
    if(!search[s[i]]){
      search[s[i]] = 1;
    } else {
      search[s[i]]++;
    }
  }

  for(var key in search){
    if(search[key] === 1){
      onesArray.push(key);
    }
  }

  for(var j=0; j<s.length; j++){
    for(var k=0; k<onesArray.length; k++){
      if(s[j] === onesArray[k]){
        return j;
      }
    }
  }

  return -1;
};