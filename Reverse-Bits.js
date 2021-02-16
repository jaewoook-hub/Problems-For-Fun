var reverseBits = function(n) {
  if (n === 0) return 0;
  var result = 0;
  for (var i = 0; i < 32; i++) {
      result <<= 1;
      if (n & 1 === 1) {
          result += 1;
      }
      n >>= 1;
  }
  return result>>>0;
};