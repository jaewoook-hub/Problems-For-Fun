var reverse = function(x) {
  const max = Math.pow(2, 31) - 1;
  const min = -Math.pow(2, 31);
  var result = 0;

  if(x > max || x < min){
      return 0;
  }

  result = (x < 0 ? -1 : 1) * Number(String(Math.abs(x)).split('').reverse().join(''));

  if(result > max || result < min){
      return 0;
  }

  return result;
};