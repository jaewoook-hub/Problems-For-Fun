var isAnagram = function(s, t) {
  if(s.length !== t.length){
    return false;
  } else {
    let hash = {};
    let hash2 = {};
    for(let i = 0; i < s.length; i ++){
        if(!hash[s[i]]){
            hash[s[i]] = 1;
        }
        else hash[s[i]] ++;
    }
    for(let i = 0; i < t.length; i ++){
      if(!hash2[t[i]]){
        hash2[t[i]] = 1;
      }
      else hash2[t[i]] ++;
    }
    for(let key in hash){
      if(hash[key] !== hash2[key]){
        return false;
      }
    }
    return true;
  }
};