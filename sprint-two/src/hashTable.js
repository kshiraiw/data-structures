var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);

};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage[i] =this._storage[i] || LinkedList();
  var entry;
  for(var node in this._storage[i]){
    if (node.value && node.value[0] === k) {
      entry = node.value;
    }
  }

  if(entry){
    entry[1] = v;
  }else{
    this._storage[i].addToTail([k,v]);
  }
  
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var searching = function(node) {
    if (node.value && node.value[0] === k) {
      return node.value[1];
    } else if (node.next) {
      return searching(node.next);
    } else {
      return null;
    }
  };

  if (this._storage[i].head) {
    return searching(this._storage[i].head);
  } else {
    return null;
  }
};

HashTable.prototype.remove = function(k){
	var i = getIndexBelowMaxForKey(k, this._limit);
	var previousNode;
	var currentNode;
	var nextNode;
	var searching = function(node){
		if(node.value[0] === k){
			previousNode.next = nextNode;
		} else if (node.next) {
			previousNode = node;
			currentNode = node.next;
			nextNode = node.next.next || null;
			searching(currentNode);
		}
	};
	if(this._storage[i].head){
		if(this._storage[i].head.value[0] ===k){
			this._storage[i].removeHead();
		}else{
			previousNode = this._storage[i].head;
			currentNode = this._storage[i].head.next || null;
			nextNode = currentNode.next || null;
			searching(currentNode);

		}
	}
};


 // * Complexity: What is the time complexity of the above functions?
 // */

