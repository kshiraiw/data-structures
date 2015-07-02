var Queue = function() {
	this.length = 0;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

Queue.prototype.size = function(){
	return this.length;
};

Queue.prototype.enqueue = function(value) {
	this[this.length] = value;
	this.length++;
	return value;
};

Queue.prototype.dequeue = function(){
	if(this.length>0){
		this.length--;
	}
	var shifted = this[0];
	delete this[0];
	for(var key in this){
		this[key - 1] = this[key];
	}
	return shifted;
};



