var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var length = 0;
  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[length] = value;
    length++;
    return value;
  };

  someInstance.dequeue = function(){
    if (length > 0) {
      length--;
    }

    var shifted = storage[0];
    delete storage[0];
    for (var prop in storage) {
      storage[prop - 1] = storage[prop];
    }
    
    return shifted;
  };

  someInstance.size = function(){
    return length;
  };

  return someInstance;
};
