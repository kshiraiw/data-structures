var Queue = function() {
	var obj = Object.create(queueMethods);
	obj.length = 0;
	return obj;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var queueMethods = {
	size: function(){
		return this.length;
	},
	dequeue: function() {
		if (this.length > 0) {
			this.length--;
		}
		var deleted = this[0];
		delete this[0];
		for (var key in this) {
			this[key - 1] = this[key] 
		}
		return deleted;
	},
	enqueue: function(value){
		this[this.length] = value;
		this.length++;
		return value;
	}

};


