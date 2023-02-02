function createBase(baseNumber) {
    return function (numToAdd) {
      return baseNumber + numToAdd;
    };
  }
  var addSix = createBase(6);
  addSix(10); // returns 16
  addSix(21); // returns 27
    
          