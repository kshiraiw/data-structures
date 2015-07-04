var Stack = function() {
	var obj = {length: 0};
	_.extend(obj, stackMethods);
	return obj;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};
var stackMethods = {

	size: function(){
		return this.length;

	},
	pop: function(){
		if (this.length > 0) {
			this.length--;
		}
		var popped = this[this.length];
		delete this[this.length];
		return popped;
	},
	push: function(value){
		this[this.length] = value;
		this.length++;
		return value;
	}
};


