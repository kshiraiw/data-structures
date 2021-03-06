var Stack = function(){
  var someInstance = {};
  var length = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value){
    storage[length] = value;
    length++;
    return value;
  };

  someInstance.pop = function(){
    if (length > 0) {
      length--;
    }
    var popped = storage[length];
    delete storage[length];
    return popped;
  };

  someInstance.size = function(){
    return length;
  };

  return someInstance;
};
