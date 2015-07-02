var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var node = new Node(value)

    if (!this.head) {
      this.head = node;
    } else {
      var current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }

    this.tail = node;

  };

  list.removeHead = function(){
    var removed = this.head;
    this.head = removed.next;
    return removed.value;
  };

  list.contains = function(target){
    var current = this.head;
    var answer = false;
    while(current){
      if(current.value === target){
        answer = true;
      }
      current = current.next;
    }
    return answer;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
