var trailingZeroes = function(n) {
  //     let factorial = 1;
  //     let result = 0;
  //     for(var i=1; i<=n; i++){
  //         factorial*=i;
  //     }

  //     let lastIndex = String(factorial).length;
  //     while(String(factorial)[lastIndex-1] === "0"){
  //         result++;
  //         lastIndex--;
  //     }
  //     return result;

      let numZeroes = 0;
      for (let i = 5; i <= n; i *= 5) {
          numZeroes += Math.floor(n / i);
      }
      return numZeroes;
  };