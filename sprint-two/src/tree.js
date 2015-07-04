var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.parent = null;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value){
	var child = new Tree(value);
	child.parent = this;
	this.children.push(child);
};

treeMethods.removeFromParent = function(value){
	var emancipated = this.findNode(value);
	var siblings = emancipated.parent.children;
	var index;
	for (var i = 0; i < siblings.length; i++) {
		if (siblings[i].value === value) {
			index = i;
		}
	}
	siblings.splice(index, 1);
	emancipated.parent = null;
};

treeMethods.findNode = function(value) {
	var findBranch = function(node){
		if(node.value === value){
			return node;
		}else if (node.children.length > 0) {
			for (var i = 0; i < node.children.length; i++) {
				return findBranch(node.children[i]);
			}
		}else{
			alert('Node not found');
		}
	};
	return findBranch(this);

};

treeMethods.contains = function(target){
	var answer = false;

	var searching = function(node) {
		if (node.value === target) {
			answer = true;
		}

		if (node.children.length > 0) {
			for (var i = 0; i < node.children.length; i++) {
				searching(node.children[i]);
			}
		}
	};

	searching(this);
	return answer;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
