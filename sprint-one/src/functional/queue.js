var Queue = function(){
  var someInstance = {};
  var length = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[length] = value;
    length++;
    return value;
  };

  someInstance.dequeue = function(){
    if ( length > 0 ) {
      length--;
    }
    var index = storage[0];
    delete storage[0];
    for ( var key in storage ) {
      storage[key - 1] = storage[key];
    }
    return index;
  };

  someInstance.size = function(){
    return length;
  };

  return someInstance;
};
