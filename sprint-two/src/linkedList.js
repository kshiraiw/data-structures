var LinkedList = function() {
  this.list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = Node(value);

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

  list.removeHead = function() {
    if (this.head) {
      var removed = this.head;
      this.head = removed.next;
      return removed.value;
    }

  };

  list.contains = function(value) {
    var searching = function(node) {
      if (node.value === value) {
        return true;
      } else if (!node.next) {
        return false;
      } else {
        return searching(node.next);
      }
    };
    return searching(this.head);

  };

  return list;
};

var Node = function(value) {
  var node = {};
  node.value = value;
  node.next = null;
  return node;
};




// var Node = function(value) {
//   var node = {};

//   node.value = value;
//   node.next = null;
//   node.previous = null;

//   return node;
// };

// var LinkedList = function(){
//   var list = {};
//   list.head = null;
//   list.tail = null;

//   list.addToTail = function(value){
//     var node = Node(value);
//     if (!this.head) {
//       this.head = node;
//     } else {
//       var current = this.head;
//       while (current.next) {
//         current = current.next;
//       }
//       current.next = node;
//       node.previous = current;
//     }
//     this.tail = node;
//   };

//   list.addToHead = function(value) {
//     var node = new Node(value);

//     if (this.head) {
//       node.next = this.head;
//       this.head.previous = node;
//     }
//     this.head = node;
//   };

//   list.removeHead = function(){
//     var removed = this.head;
//     this.head = removed.next;
//     if (this.head) {
//       this.head.previous = null;
//     }
//     return removed.value;
//   };

//   list.removeTail = function() {
//     var removed = this.tail;
//     this.tail = removed.previous;
//     return removed.value;
//   };

//   list.contains = function(target){
//     var lookingAtList = function(current) {
//       if (current.value === target) {
//         return true;
//       } else if (!current.next) {
//         return false;
//       } else {
//         return lookingAtList(current.next);
//       }
//     };

//     return lookingAtList(this.head);
//   };

// return list;
// };


/*
 * Complexity: What is the time complexity of the above functions?
 */
