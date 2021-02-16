var Stack = function() {
  var storage = [];
  var stackSize = 0;
  var minNum = 0;
  var minNumPop = 0;
  // test for strings/mixture of string and number?

// add an item to the top of the stack
  this.push = function(value) {
      storage.push(value);
      if (stackSize === 0) {
          minNum = value;
          minNumPop = value;
      } else if (value <= minNum) {
          minNumPop = minNum;
          minNum = value;
      }
      stackSize++;
  };

// remove an item from the top of the stack
  this.pop = function() {
      if (stackSize > 0) {
          var poppedItem = storage[stackSize - 1];
          delete storage[stackSize - 1];
          if (poppedItem === minNum) {
              minNum = minNumPop;
          }
          stackSize--;
          return poppedItem;
      } else {
          return null;
      }
  };

// return the number of items in the stack
  this.size = function() {
      return stackSize;
  };

// return the minimum value in the stack
  this.min = function() {
      return minNum;
  };

};