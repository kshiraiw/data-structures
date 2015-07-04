var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);

};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if (!this._storage[i]) {
  	this._storage[i] = HashLinkedList();
   }
  this._storage[i].addToTail(k,v);

};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  return this._storage[i].find(k);
};

HashTable.prototype.remove = function(k){
	var i = getIndexBelowMaxForKey(k, this._limit);
	this._storage[i].removeNode(k);
};

var HashLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(key, value){
    var node = new HashNode(key, value)

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

  list.find = function(key){
  	var found = null;
  	if (!this.contains(key)) {
  		return null;
  	}
  	var finding = function(current) {
  		if (current.key === key) {
  			console.log(current.value)
  			found = current.value
  		} else {
  			finding(current.next);
  		}

  	}
  	finding(this.head);
  	return found;

  }

  list.removeHead = function(){
    var removed = this.head;
    this.head = removed.next;
    return removed.value;
  };

  list.removeNode = function(key){

  	if (this.head.key === key) {
  		return this.removeHead();
  	} else {
  		var previous = this.head;
  		var current = previous.next;
  		var next = current.next;

  		var looking = function(current) {
  			if (current.key === key) {
  				previous.next = next;
  				return current;
  			} else {
		  		previous = current;
		  		current = previous.next;
		  		next = current.next;
		  		looking(current);
  			}
  		}
  		return looking(this.head.next);
  	
  	}


  };

  list.contains = function(target){
    var answer = false;
    if (this.head) {
	    var lookingAtList = function(current) {      
	      if (current.key === target) {
	        answer = true;
	        return;
	      } else if (!current.next) {
	        return;
	      } else {
	        lookingAtList(current.next);
	      } 
	    };

	    lookingAtList(this.head);
	}
    return answer;
  };

return list;
};

var HashNode = function(key, value){
  var node = {};

  node.key = key;
  node.value = value;
  node.next = null;

  return node;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
