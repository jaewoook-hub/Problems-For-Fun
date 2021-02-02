var titleToNumber = function(s) {
  s = s.toUpperCase();
  var r=0;
  var len=s.length;
  for(var i=0; i<len; i++){
    r += (Math.pow(26, (len - i - 1)) * (s.charCodeAt(i) - 64));
    // 26^(0)
  }
  return r;
};