var BinarySearchTree = function(value){
	this.root = new Node(value);

	this.insert = function(value) {
		var tree = new Node(value);

		if(!this.root){
			this.root = tree;
		} else {
			console.log(this.root)
			var current = this.root;
			var isPlaced = false;
			while(!isPlaced) {
				if(value > current.value){
					console.log("hello")
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
		}
	};
	this.contains = function(value) {

	};
	this.depthFirstLog = function(callback) {

	};


};

var Node = function(value) {
	this.value = value;
	this.right = null;
	this.left = null;
}


/*
 * Complexity: What is the time complexity of the above functions?
 */
