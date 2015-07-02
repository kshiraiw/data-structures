var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value){
	var child = new Tree(value);
	this.children.push(child);
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
	}

	searching(this);
	return answer;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
