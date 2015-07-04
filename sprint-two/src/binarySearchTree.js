var BinarySearchTree = function(value){
	var obj = Object.create(BinarySearchTree.prototype);
	obj.value = value;
	obj.left = null;
	obj.right = null;
	return obj;
};

BinarySearchTree.prototype = {
	insert: function(value){
		var tree = BinarySearchTree(value);
		var current = this;
		var isPlaced = false;
		while(!isPlaced) {
			if(value > current.value){
				if(current.right === null){
					isPlaced = true;
					current.right = tree;
				} else {
					current = current.right;
				}
			} else {
				if (current.left === null) {
					isPlaced = true;
					current.left = tree;
				} else {
					current = current.left;
				}
			}
		}
	},
	contains: function(value) {
		var nodeContains = function(node) {
			if (node.value === value) {
				return true;
			} else if (!node.left && !node.right) {
				return false;
			} else if (value > node.value) {
				return nodeContains(node.right);
			} else {
				return nodeContains(node.left);
			}
		};

		return nodeContains(this);
	},
	depthFirstLog: function(callback){
		var addCallback = function(current){
			callback(current.value);
			if(current.left){
				addCallback(current.left);
			}
			if(current.right){
				addCallback(current.right);
			}
		};
		addCallback(this);
	}
};




/*
 * Complexity: What is the time complexity of the above functions?
 */
