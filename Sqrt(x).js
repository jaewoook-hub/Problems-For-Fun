var mySqrt = function(x) {
  let result = 0;

  while(result * result <= x){
      result++;
  }

  return result-1;
};