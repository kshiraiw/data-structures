var BinarySearchTree= function(value) {
	var obj = Object.create(BinarySearchTree.prototype);
	obj.value = value;
	obj.right = null;
	obj.left = null;
	return obj;
};

BinarySearchTree.prototype = {
	insert: function(value) {
		var node = BinarySearchTree(value);
		var place = function(tree) {
			if (value > tree.value) {
				if (!tree.right) {
					tree.right = node;
				} else {
					place(tree.right);
				}
			} else {
				if (!tree.left) {
					tree.left = node;
				} else {
					place(tree.left);
				}
			}
		};
		place(this);
	},
	contains: function(value) {
		var answer = false;
		var searching = function(node){
			if (node.value === value) {
				answer = true;
			} else if (value > node.value && node.right) {
				searching(node.right);
			} else if (node.left) {
				searching(node.left);
			}
		};
		searching(this);
		return answer;
	},
	depthFirstLog: function(callback) {
		var addCallback = function(node){
			callback(node.value);
			if (node.right) {
				addCallback(node.right);
			} else if (node.left) {
				addCallback(node.left);
			}
		};
		addCallback(this);
	}
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
