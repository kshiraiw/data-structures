var Queue = function(){
  var obj = {length: 0};

  _.extend(obj, queueMethods);
  return obj;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var queueMethods = {
  size: function() {
    return this.length;
  },
  enqueue: function(value) {
    this[this.length] = value;
    this.length++;
    return value;
  },
  dequeue: function() {
    if (this.length > 0) {
      this.length--;
    }
    var shifted = this[0];
    delete this[0];
    for (var prop in this) {
      this[prop - 1]  = this[prop];
    }
    return shifted;
  }
};



