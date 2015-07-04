

var Graph = function(){
	this.nodes = {};
};

Graph.prototype.addNode = function(node){
	this.nodes[node] = {name: node, adjacentTo: []}
};

Graph.prototype.contains = function(node){
	return !!this.nodes[node];
};

Graph.prototype.removeNode = function(node){
	var arr = this.nodes[node].adjacentTo.slice();
	for(var i = 0; i< arr.length; i++){
		removeEdge(node, arr[i]);
	}
	delete this.nodes[node];

};

Graph.prototype.hasEdge = function(fromNode, toNode){
	return this.nodes[fromNode].adjacentTo.indexOf(toNode) !== -1;
};

Graph.prototype.addEdge = function(fromNode, toNode){
	this.nodes[fromNode].adjacentTo.push(toNode);
	this.nodes[toNode].adjacentTo.push(fromNode);
};

Graph.prototype.removeEdge = function(fromNode, toNode){
	var fromArr =  this.nodes[fromNode].adjacentTo,
		toArr = this.nodes[toNode].adjacentTo;
	
	fromArr.splice(fromArr.indexOf(toNode), 1);
	toArr.splice(toArr.indexOf(fromNode), 1);


};

Graph.prototype.forEachNode = function(cb){
	for (var node in this.nodes) {
		cb(node);
	}
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



