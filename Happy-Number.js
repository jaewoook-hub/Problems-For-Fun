function happyNumber(n){
    const previouslySeenSums = new Set();
    while(n !== 1){
      let currentSum = 0;
      while(n > 0){
        currentSum += (n%10) * (n%10);
        n = Math.floor(n/10);
      }
      if(!previouslySeenSums.has(currentSum)){
        previouslySeenSums.add(currentSum);
        n = currentSum;
      } else {
        return false;
      }
    }
    return true;
}